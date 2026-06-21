/** Telegram bot username (without @). Set NEXT_PUBLIC_BOT_USERNAME in .env. */
export const BOT_USERNAME =
  process.env.NEXT_PUBLIC_BOT_USERNAME ?? 'kalori_ai_bot';

/** Deep-link that opens the bot in Telegram. */
export const BOT_URL = `https://t.me/${BOT_USERNAME}`;

export const BRAND = 'Kalori AI';
