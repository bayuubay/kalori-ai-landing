export type Lang = 'id' | 'en';

export interface Copy {
  nav: { features: string; how: string; pricing: string; faq: string };
  cta: string;
  ctaSecondary: string;
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    proof: string;
  };
  features: { title: string; subtitle: string; items: Feature[] };
  how: { title: string; subtitle: string; steps: Step[] };
  pricing: {
    title: string;
    subtitle: string;
    freeBadge: string;
    freePrice: string;
    freeDesc: string;
    freeCta: string;
    packDesc: string;
    payCta: string;
    creditsUnit: string;
    note: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  finalCta: { title: string; subtitle: string };
  footer: { tagline: string; rights: string; terms: string; privacy: string };
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}
interface Step {
  num: string;
  title: string;
  desc: string;
}

const id: Copy = {
  nav: { features: 'Fitur', how: 'Cara Kerja', pricing: 'Harga', faq: 'FAQ' },
  cta: 'Mulai di Telegram',
  ctaSecondary: 'Coba Gratis',
  hero: {
    badge: '🤖 Asisten gizi bertenaga AI',
    title: 'Hitung kalori cukup dari',
    titleAccent: 'foto makananmu',
    subtitle:
      'Kirim foto atau ketik makananmu ke bot Telegram. AI langsung estimasi kalori, protein, karbohidrat, dan lemak. Tanpa install aplikasi, tanpa ribet cari data makanan.',
    proof: 'Gratis coba · Tanpa biaya langganan · Langsung di Telegram',
  },
  features: {
    title: 'Semua yang kamu butuh untuk diet cerdas',
    subtitle:
      'Dari deteksi makanan sampai pantau progres berat badan — semua dalam satu chat.',
    items: [
      {
        icon: '📷',
        title: 'Deteksi dari foto',
        desc: 'Foto makananmu, AI estimasi kalori & makro tiap komponen otomatis.',
      },
      {
        icon: '📝',
        title: 'Input teks cepat',
        desc: 'Tidak sempat foto? Ketik "2 telur, nasi setengah porsi" — beres.',
      },
      {
        icon: '🎯',
        title: 'Target & makro',
        desc: 'Set target kalori harian + protein/karbo/lemak. Bot hitung BMR & TDEE-mu.',
      },
      {
        icon: '🏃',
        title: 'Program diet',
        desc: 'Pilih turun, jaga, atau naik berat badan. Dapat rekomendasi otomatis.',
      },
      {
        icon: '🔥',
        title: 'Estimasi kalori olahraga',
        desc: 'Cukup ketik latihan & durasi (mis. "lari 30 menit"). AI hitung kalori terbakar sesuai berat badanmu — bisa banyak latihan sekaligus.',
      },
      {
        icon: '📈',
        title: 'Grafik progres',
        desc: 'Catat berat badan, lihat tren naik/turun dalam grafik langsung di chat.',
      },
      {
        icon: '📊',
        title: 'Ringkasan harian',
        desc: 'Total kalori harian, mingguan, bulanan vs target — net makanan dikurangi olahraga.',
      },
    ],
  },
  how: {
    title: 'Mulai dalam 3 langkah',
    subtitle: 'Tidak perlu install apa pun. Cukup dengan akun Telegram kamu.',
    steps: [
      {
        num: '1',
        title: 'Buka bot di Telegram',
        desc: 'Klik tombol di bawah ini, lalu tekan Start. Isi profil singkat (tinggi, berat, target).',
      },
      {
        num: '2',
        title: 'Kirim makananmu',
        desc: 'Foto atau ketik apa yang kamu makan. AI langsung beri estimasi kalori dan makronutrien.',
      },
      {
        num: '3',
        title: 'Pantau progres',
        desc: 'Catat progress berat badan, lihat ringkasan & grafik, capai targetmu lebih cepat.',
      },
    ],
  },
  pricing: {
    title: 'Harga UMKM, bayar sesuai kebutuhan',
    subtitle: 'Coba sekarang, gratis! Top up mudah dan murah, kapan saja kamu butuh.',
    freeBadge: 'Gratis',
    freePrice: 'Rp0',
    freeDesc: 'Kredit gratis untuk pengguna baru. Tanpa kartu kredit, tanpa langganan.',
    freeCta: 'Mulai gratis',
    packDesc: 'Tiap analisis pakai kredit (foto/teks). Top up via metode pembayaran favoritmu.',
    payCta: 'Top up',
    creditsUnit: 'kredit',
    note: 'Ajak teman lewat tautan undangan — kalian berdua dapat kredit gratis.',
  },
  faq: {
    title: 'Pertanyaan umum',
    items: [
      {
        q: 'Apakah benar-benar gratis?',
        a: 'Ya, kamu dapat kredit gratis saat pertama kali mulai. Setelah habis, kamu bisa top up sesuai kebutuhan — tidak ada langganan wajib.',
      },
      {
        q: 'Perlu install aplikasi?',
        a: 'Tidak. Semua berjalan di dalam Telegram yang sudah ada di ponselmu. Cukup buka bot dan mulai.',
      },
      {
        q: 'Seberapa akurat estimasinya?',
        a: 'AI memberi estimasi berdasarkan foto dan datamu, AI mungkin melakukan kesalahan. Untuk kondisi medis khusus, tetap konsultasikan dengan dokter atau ahli gizi.',
      },
      {
        q: 'Bahasa apa yang didukung?',
        a: 'Bot mendukung Bahasa Indonesia dan Inggris. Kamu bisa ganti bahasa hasil analisis kapan saja.',
      },
    ],
  },
  finalCta: {
    title: 'Siap mulai diet cerdas?',
    subtitle: 'Buka bot, kirim foto makanan pertamamu, lihat hasilnya seketika.',
  },
  footer: {
    tagline: 'Asisten gizi bertenaga AI di Telegram.',
    rights: 'Hak cipta dilindungi.',
    terms: 'Syarat & Ketentuan',
    privacy: 'Kebijakan Privasi',
  },
};

const en: Copy = {
  nav: { features: 'Features', how: 'How it works', pricing: 'Pricing', faq: 'FAQ' },
  cta: 'Start on Telegram',
  ctaSecondary: 'Try Free',
  hero: {
    badge: '🤖 AI-powered nutrition assistant',
    title: 'Track calories just from',
    titleAccent: 'a photo of your meal',
    subtitle:
      'Send a photo or type your meal to the Telegram bot. AI instantly estimates calories, protein, carbs, and fat. No app install, no database hunting.',
    proof: 'Free starter credits · No credit card · Right inside Telegram',
  },
  features: {
    title: 'Everything you need to eat smart',
    subtitle:
      'From meal detection to weight tracking — all inside one chat.',
    items: [
      {
        icon: '📷',
        title: 'Detect from photo',
        desc: 'Snap your meal; AI estimates calories & macros per component automatically.',
      },
      {
        icon: '📝',
        title: 'Quick text input',
        desc: 'No time for a photo? Type "2 eggs, half plate of rice" — done.',
      },
      {
        icon: '🎯',
        title: 'Targets & macros',
        desc: 'Set a daily calorie + protein/carb/fat target. Bot computes your BMR & TDEE.',
      },
      {
        icon: '🏃',
        title: 'Diet programs',
        desc: 'Pick cut, maintain, or gain. Get automatic macro & calorie recommendations.',
      },
      {
        icon: '🔥',
        title: 'Exercise calorie estimate',
        desc: 'Just type an activity & duration (e.g. "run 30 min"). AI estimates calories burned based on your body weight — multiple activities at once.',
      },
      {
        icon: '📈',
        title: 'Progress charts',
        desc: 'Log your weight and see the trend in a chart right in the chat.',
      },
      {
        icon: '📊',
        title: 'Daily summaries',
        desc: 'Daily, weekly, monthly calories vs target — net of food minus exercise.',
      },
    ],
  },
  how: {
    title: 'Get started in 3 steps',
    subtitle: 'Nothing to install. Just Telegram.',
    steps: [
      {
        num: '1',
        title: 'Open the bot on Telegram',
        desc: 'Tap the button below, then press Start. Fill a quick profile (height, weight, goal).',
      },
      {
        num: '2',
        title: 'Send your meal',
        desc: 'Photo or text what you ate. AI gives an instant nutrition estimate.',
      },
      {
        num: '3',
        title: 'Track your progress',
        desc: 'Save weight progress, view summaries & charts, hit your goals faster.',
      },
    ],
  },
  pricing: {
    title: 'Simple pricing, pay as you go',
    subtitle: 'Try it free first. Top up anytime you need more.',
    freeBadge: 'Free',
    freePrice: 'Rp0',
    freeDesc: 'Free credits for new users. No credit card, no subscription.',
    freeCta: 'Start free',
    packDesc: 'Each analysis uses credits (photo/text). Top up via your favourite payment method.',
    payCta: 'Top up',
    creditsUnit: 'credits',
    note: 'Invite friends with your referral link — you both get free credits.',
  },
  faq: {
    title: 'Frequently asked questions',
    items: [
      {
        q: 'Is it really free?',
        a: 'Yes, you get free credits when you start. Once used up, top up as needed — no mandatory subscription.',
      },
      {
        q: 'Do I need to install an app?',
        a: 'No. Everything runs inside Telegram, already on your phone. Just open the bot and start.',
      },
      {
        q: 'How accurate are the estimates?',
        a: 'The AI gives estimate for tracking daily trends based on your input, it may makes mistakes. For specific medical conditions, always consult a doctor or dietitian.',
      },
      {
        q: 'Which languages are supported?',
        a: 'The bot supports Indonesian and English. You can switch the analysis language anytime.',
      },
    ],
  },
  finalCta: {
    title: 'Ready to eat smarter?',
    subtitle: 'Open the bot, send your first meal photo, see results instantly.',
  },
  footer: {
    tagline: 'AI-powered nutrition assistant on Telegram.',
    rights: 'All rights reserved.',
    terms: 'Terms & Conditions',
    privacy: 'Privacy Policy',
  },
};

export const COPY: Record<Lang, Copy> = { id, en };
