/* @identity 9mza */
import { signAuthoritySyncToken } from "./auth-utility";
import { safeErrorLog } from "../utils";

/**
 * 🛡️ AUTHORITY SYNC SERVICE (E-E-A-T CORE)
 * -------------------------------------------------------------------------
 * Synchronizes authority data with the central authority API.
 * Standard: JWT HS256, Timeout: 5000ms
 *
 * This service is the heart of E-E-A-T Sync, ensuring that all
 * authority-related data is propagated to the central authority system.
 */

export async function syncAuthorityData(
  data: Record<string, unknown>,
): Promise<boolean> {
  const apiUrl = process.env.AUTHORITY_API_URL;

  if (!apiUrl) {
    safeErrorLog(
      "AUTHORITY_SYNC_CONFIG_ERROR",
      new Error("AUTHORITY_API_URL is not defined in environment variables"),
    );
    return false;
  }

  try {
    // 1. Sign JWT Token (HS256, 5m expiry)
    // The token includes the data payload for verification at the destination
    const token = await signAuthoritySyncToken(data);

    // 2. Setup Timeout (5000ms)
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    // 3. Send POST Request with Authorization Bearer token
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
      signal: controller.signal,
    });

    // Clear timeout as the request finished (successfully or with error)
    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text();
      safeErrorLog(
        "AUTHORITY_SYNC_HTTP_ERROR",
        new Error(`Status ${response.status}: ${errorText}`),
      );
      return false;
    }

    return true;
  } catch (error: unknown) {
    // Handle specific timeout error
    if (error instanceof Error && error.name === "AbortError") {
      safeErrorLog(
        "AUTHORITY_SYNC_TIMEOUT",
        new Error("Sync request timed out after 5000ms"),
      );
    } else {
      // Handle other errors (network, signing, etc.)
      safeErrorLog("AUTHORITY_SYNC_ERROR", error);
    }
    return false;
  }
}
