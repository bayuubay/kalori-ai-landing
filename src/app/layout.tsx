import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://kaloriai.my.id',
  ),
  title: 'Kalori AI — Hitung Kalori dari Foto Makanan di Telegram',
  description:
    'Asisten gizi bertenaga AI di Telegram. Kirim foto atau teks makananmu, dapat estimasi kalori, protein, karbo, dan lemak seketika. Gratis kredit awal.',
  keywords: [
    'kalori',
    'hitung kalori',
    'kalori AI',
    'diet',
    'gizi',
    'telegram bot',
    'calorie counter',
    'nutrition AI',
  ],
  openGraph: {
    title: 'Kalori AI — Hitung Kalori dari Foto Makanan',
    description:
      'Kirim foto makananmu ke bot Telegram, AI hitung kalori & makro seketika.',
    type: 'website',
    images: ['/logo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
