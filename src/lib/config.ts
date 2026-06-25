/** Telegram bot username (without @). Set NEXT_PUBLIC_BOT_USERNAME in .env. */
export const BOT_USERNAME =
  process.env.NEXT_PUBLIC_BOT_USERNAME ?? 'kalori_ai_bot';

/** Deep-link that opens the bot in Telegram. */
export const BOT_URL = `https://t.me/${BOT_USERNAME}`;

export const BRAND = 'Kalori AI';

/**
 * Base URL of the kalori-ai-api. Used server-side to fetch the public credit
 * pack catalog. Set API_BASE_URL in .env (no NEXT_PUBLIC_ prefix — server only).
 */
export const API_BASE_URL =
  process.env.API_BASE_URL ?? 'http://localhost:3000';
