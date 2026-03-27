/* @identity 9mza */
import { SignJWT } from "jose";

/**
 * Utility for signing JWT tokens for Authority Sync (E-E-A-T)
 * Standard: HS256, Expiry: 5 minutes
 */
export async function signAuthoritySyncToken(payload: Record<string, unknown>) {
  const secretStr = process.env.AUTHORITY_SYNC_SECRET;

  if (!secretStr) {
    throw new Error(
      "AUTHORITY_SYNC_SECRET is not defined in environment variables",
    );
  }

  const secret = new TextEncoder().encode(secretStr);

  return await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setIssuer("unlink-portal")
    .setAudience("me.aemdevweb.com")
    .setExpirationTime("5m")
    .sign(secret);
}
