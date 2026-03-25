import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";

/**
 * 🛡️ UNLINK-GLOBAL | EXECUTIVE ESLINT CONFIG (v6.0 - High Precision)
 * -------------------------------------------------------------------------
 * มาตรฐานการตรวจสอบโค้ดระดับ Senior สำหรับ Next.js 16 และ React 19
 * ปรับปรุงประสิทธิภาพสูงสุดเพื่อรองรับสภาพแวดล้อมจำลอง (High Memory Efficiency)
 */

export default tseslint.config(
  // 1. Global Ignores (Exclude non-critical assets)
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**",
      "**/*.d.ts",
      ".gemini/**",
      "build/**",
      "dist/**",
      ".vercel/**",
      "*.config.mjs",
      "*.config.js",
      "*.config.ts",
      "scripts/**",
      "tests/**",
    ],
  },

  // 2. Base Configurations
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // 3. TypeScript Precision (Optimized for Mobile/Termux)
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // 🛡️ Data Integrity (Standard Linting)
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // 🧹 Syntax Standards
      "object-shorthand": ["error", "always"],
      "prefer-template": "error",
    },
  },

  // 4. React & Next.js Professional Standards
  {
    files: ["**/*.tsx"],
    plugins: {
      "react-hooks": reactHooks,
      "@next/next": nextPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // 🖼️ Asset Protocol
      "@next/next/no-img-element": "error", // Force next/image usage
      "@next/next/no-html-link-for-pages": "error",
    },
  },

  // 5. Executive Ethics & Privacy (PII Protection)
  {
    rules: {
      // 🔒 Privacy: ห้ามปล่อย log ข้อมูลทั่วไปลง console เพื่อป้องกัน PII รั่วไหล
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // 🏛️ Code Structure
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      "no-else-return": "error",
      "no-lonely-if": "error",
      "max-params": ["warn", 4], // ควบคุมความซับซ้อนของฟังก์ชัน
    },
  },
);
