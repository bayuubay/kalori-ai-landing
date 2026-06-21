import type { Lang } from './i18n';

export interface LegalSection {
  heading: string;
  /** Paragraphs and/or bullet lists. A string is a paragraph; an array is a bullet list. */
  body: (string | string[])[];
}

export interface LegalDoc {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const LAST_UPDATED = { id: '21 Juni 2026', en: 'June 21, 2026' };

// ---------------------------------------------------------------------------
// Terms & Conditions
// ---------------------------------------------------------------------------

const termsId: LegalDoc = {
  title: 'Syarat & Ketentuan',
  updated: LAST_UPDATED.id,
  intro:
    'Selamat datang di Kalori AI ("Layanan"), asisten gizi berbasis AI yang berjalan di Telegram. Dengan menggunakan Layanan, kamu setuju dengan Syarat & Ketentuan berikut. Mohon baca dengan saksama.',
  sections: [
    {
      heading: '1. Tentang Layanan',
      body: [
        'Kalori AI adalah bot Telegram yang membantu memperkirakan kandungan gizi (kalori, protein, karbohidrat, lemak) dari makanan berdasarkan foto atau deskripsi teks yang kamu kirim, serta membantu mencatat target, program diet, dan progres berat badan.',
        'Layanan menggunakan model kecerdasan buatan (AI) untuk menghasilkan estimasi. Estimasi bersifat perkiraan, bukan pengukuran laboratorium.',
      ],
    },
    {
      heading: '2. Bukan Nasihat Medis',
      body: [
        'Kalori AI bukan pengganti nasihat, diagnosis, atau perawatan dari tenaga medis profesional. Informasi yang diberikan hanya untuk tujuan informasi dan edukasi umum.',
        'AI dapat membuat kesalahan. Jangan menggunakan Layanan sebagai dasar tunggal untuk keputusan kesehatan. Konsultasikan dengan dokter atau ahli gizi, terutama jika kamu memiliki kondisi medis, alergi, sedang hamil/menyusui, atau menjalani diet khusus.',
      ],
    },
    {
      heading: '3. Kelayakan & Akun',
      body: [
        'Kamu harus berusia minimal 13 tahun (atau usia minimum yang berlaku di wilayahmu) untuk menggunakan Layanan.',
        'Akun terhubung dengan akun Telegram-mu. Kamu bertanggung jawab atas aktivitas yang terjadi melalui akunmu.',
        'Kamu setuju memberikan informasi yang benar saat mengisi profil (mis. nama, nomor telepon, data tubuh).',
      ],
    },
    {
      heading: '4. Kredit & Pembayaran',
      body: [
        'Sebagian fitur (mis. analisis makanan) menggunakan sistem kredit. Pengguna baru menerima kredit gratis di awal.',
        'Kamu dapat membeli paket kredit tambahan melalui penyedia pembayaran pihak ketiga (Midtrans). Harga, jumlah kredit, dan diskon dapat berubah sewaktu-waktu.',
        'Kredit bersifat non-tunai, tidak dapat dipindahtangankan, dan pada umumnya tidak dapat dikembalikan/diuangkan, kecuali diwajibkan oleh hukum yang berlaku.',
        'Biaya per analisis dapat berbeda antara input foto dan teks, dan dapat berubah seiring waktu.',
      ],
    },
    {
      heading: '5. Program Referral',
      body: [
        'Kamu dapat mengundang teman melalui tautan undangan. Bonus kredit diberikan kepada pengundang dan yang diundang setelah syarat tertentu terpenuhi (mis. deteksi makanan pertama).',
        'Penyalahgunaan program referral (mis. akun palsu, manipulasi) dapat menyebabkan pembatalan bonus dan/atau penangguhan akun.',
      ],
    },
    {
      heading: '6. Penggunaan yang Dilarang',
      body: [
        'Kamu setuju untuk tidak:',
        [
          'Menggunakan Layanan untuk tujuan melanggar hukum atau merugikan orang lain.',
          'Mengirim konten yang melanggar, berbahaya, atau tidak pantas.',
          'Mencoba meretas, membebani, atau mengganggu sistem Layanan.',
          'Menyalahgunakan kredit, pembayaran, atau program referral.',
        ],
      ],
    },
    {
      heading: '7. Kekayaan Intelektual',
      body: [
        'Seluruh merek, logo, dan perangkat lunak Layanan adalah milik kami atau pemberi lisensi kami. Kamu tetap memiliki konten yang kamu kirim, namun memberi kami izin untuk memprosesnya guna menyediakan Layanan.',
      ],
    },
    {
      heading: '8. Batasan Tanggung Jawab',
      body: [
        'Layanan disediakan "sebagaimana adanya" tanpa jaminan apa pun. Sepanjang diizinkan hukum, kami tidak bertanggung jawab atas kerugian yang timbul dari penggunaan atau ketidakmampuan menggunakan Layanan, termasuk keputusan kesehatan yang dibuat berdasarkan estimasi AI.',
      ],
    },
    {
      heading: '9. Perubahan Layanan & Syarat',
      body: [
        'Kami dapat mengubah, menangguhkan, atau menghentikan Layanan, serta memperbarui Syarat ini, sewaktu-waktu. Perubahan berlaku sejak dipublikasikan. Penggunaan berkelanjutan berarti kamu menerima perubahan tersebut.',
      ],
    },
    {
      heading: '10. Kontak',
      body: [
        'Pertanyaan tentang Syarat ini dapat disampaikan melalui fitur feedback di dalam bot.',
      ],
    },
  ],
};

const termsEn: LegalDoc = {
  title: 'Terms & Conditions',
  updated: LAST_UPDATED.en,
  intro:
    'Welcome to Kalori AI ("the Service"), an AI-powered nutrition assistant running on Telegram. By using the Service, you agree to the following Terms & Conditions. Please read them carefully.',
  sections: [
    {
      heading: '1. About the Service',
      body: [
        'Kalori AI is a Telegram bot that helps estimate the nutritional content (calories, protein, carbs, fat) of food from photos or text descriptions you send, and helps you log targets, diet programs, and weight progress.',
        'The Service uses artificial intelligence (AI) to generate estimates. Estimates are approximations, not laboratory measurements.',
      ],
    },
    {
      heading: '2. Not Medical Advice',
      body: [
        'Kalori AI is not a substitute for professional medical advice, diagnosis, or treatment. The information provided is for general informational and educational purposes only.',
        'AI can make mistakes. Do not rely on the Service as the sole basis for health decisions. Consult a doctor or dietitian, especially if you have a medical condition, allergies, are pregnant/nursing, or follow a special diet.',
      ],
    },
    {
      heading: '3. Eligibility & Account',
      body: [
        'You must be at least 13 years old (or the minimum age in your region) to use the Service.',
        'Your account is linked to your Telegram account. You are responsible for activity that occurs through your account.',
        'You agree to provide accurate information when completing your profile (e.g. name, phone number, body data).',
      ],
    },
    {
      heading: '4. Credits & Payments',
      body: [
        'Some features (e.g. food analysis) use a credit system. New users receive free starter credits.',
        'You may purchase additional credit packs through a third-party payment provider (Midtrans). Prices, credit amounts, and discounts may change at any time.',
        'Credits have no cash value, are non-transferable, and are generally non-refundable, except as required by applicable law.',
        'The cost per analysis may differ between photo and text input, and may change over time.',
      ],
    },
    {
      heading: '5. Referral Program',
      body: [
        'You may invite friends via a referral link. Bonus credits are granted to both the referrer and the referee once certain conditions are met (e.g. first food detection).',
        'Abuse of the referral program (e.g. fake accounts, manipulation) may result in forfeiture of bonuses and/or account suspension.',
      ],
    },
    {
      heading: '6. Prohibited Use',
      body: [
        'You agree not to:',
        [
          'Use the Service for unlawful purposes or to harm others.',
          'Send infringing, harmful, or inappropriate content.',
          'Attempt to hack, overload, or disrupt the Service.',
          'Abuse credits, payments, or the referral program.',
        ],
      ],
    },
    {
      heading: '7. Intellectual Property',
      body: [
        'All trademarks, logos, and software of the Service belong to us or our licensors. You retain ownership of content you send, but grant us permission to process it to provide the Service.',
      ],
    },
    {
      heading: '8. Limitation of Liability',
      body: [
        'The Service is provided "as is" without warranties of any kind. To the extent permitted by law, we are not liable for any damages arising from your use of or inability to use the Service, including health decisions made based on AI estimates.',
      ],
    },
    {
      heading: '9. Changes to the Service & Terms',
      body: [
        'We may modify, suspend, or discontinue the Service, and update these Terms, at any time. Changes take effect when published. Continued use means you accept the changes.',
      ],
    },
    {
      heading: '10. Contact',
      body: [
        'Questions about these Terms can be sent via the feedback feature inside the bot.',
      ],
    },
  ],
};

// ---------------------------------------------------------------------------
// Privacy Policy
// ---------------------------------------------------------------------------

const privacyId: LegalDoc = {
  title: 'Kebijakan Privasi',
  updated: LAST_UPDATED.id,
  intro:
    'Kebijakan Privasi ini menjelaskan data apa yang kami kumpulkan, bagaimana kami menggunakannya, dan hak-hakmu saat menggunakan Kalori AI.',
  sections: [
    {
      heading: '1. Data yang Kami Kumpulkan',
      body: [
        'Kami mengumpulkan data berikut saat kamu menggunakan Layanan:',
        [
          'Identitas Telegram: ID Telegram, username, nama depan.',
          'Data profil: nama, nomor telepon, jenis kelamin, tinggi, berat, umur, tingkat aktivitas, target & program diet.',
          'Konten yang kamu kirim: foto makanan dan/atau deskripsi teks untuk dianalisis.',
          'Catatan: makanan, latihan, berat badan, serta riwayat kredit dan transaksi pembayaran.',
          'Data teknis: log penggunaan untuk keandalan dan keamanan.',
        ],
      ],
    },
    {
      heading: '2. Cara Kami Menggunakan Data',
      body: [
        'Data digunakan untuk:',
        [
          'Menyediakan dan meningkatkan Layanan (analisis gizi, ringkasan, grafik).',
          'Menghitung kebutuhan kalori (BMR/TDEE) dan rekomendasi.',
          'Memproses pembelian kredit dan program referral.',
          'Mengirim notifikasi terkait Layanan (mis. saldo kredit, hasil pembayaran).',
          'Menjaga keamanan dan mencegah penyalahgunaan.',
        ],
      ],
    },
    {
      heading: '3. Pemrosesan oleh AI & Pihak Ketiga',
      body: [
        'Untuk menghasilkan estimasi gizi, foto/teks yang kamu kirim diproses oleh penyedia model AI pihak ketiga. Kirim hanya konten yang kamu nyaman untuk diproses.',
        'Pembayaran diproses oleh Midtrans. Kami tidak menyimpan detail kartu/akun pembayaranmu.',
        'Layanan berjalan di platform Telegram, yang memiliki kebijakan privasinya sendiri.',
      ],
    },
    {
      heading: '4. Penyimpanan & Keamanan',
      body: [
        'Kami menyimpan data selama akun aktif atau selama diperlukan untuk menyediakan Layanan dan memenuhi kewajiban hukum. Kami menerapkan langkah keamanan yang wajar, namun tidak ada sistem yang 100% aman.',
      ],
    },
    {
      heading: '5. Berbagi Data',
      body: [
        'Kami tidak menjual data pribadimu. Kami hanya membagikan data kepada penyedia layanan (mis. AI, pembayaran) sejauh diperlukan untuk menjalankan Layanan, atau jika diwajibkan oleh hukum.',
      ],
    },
    {
      heading: '6. Hak Kamu',
      body: [
        'Kamu dapat:',
        [
          'Melihat dan memperbarui data profil melalui bot.',
          'Menghapus data profil & riwayat melalui perintah /deleteme di bot.',
          'Meminta informasi tentang data yang kami simpan melalui fitur feedback.',
        ],
      ],
    },
    {
      heading: '7. Anak-anak',
      body: [
        'Layanan tidak ditujukan untuk anak di bawah usia minimum yang berlaku. Kami tidak dengan sengaja mengumpulkan data dari anak di bawah usia tersebut.',
      ],
    },
    {
      heading: '8. Perubahan Kebijakan',
      body: [
        'Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan berlaku sejak dipublikasikan.',
      ],
    },
    {
      heading: '9. Kontak',
      body: [
        'Pertanyaan tentang privasi dapat disampaikan melalui fitur feedback di dalam bot.',
      ],
    },
  ],
};

const privacyEn: LegalDoc = {
  title: 'Privacy Policy',
  updated: LAST_UPDATED.en,
  intro:
    'This Privacy Policy explains what data we collect, how we use it, and your rights when using Kalori AI.',
  sections: [
    {
      heading: '1. Data We Collect',
      body: [
        'We collect the following data when you use the Service:',
        [
          'Telegram identity: Telegram ID, username, first name.',
          'Profile data: name, phone number, sex, height, weight, age, activity level, targets & diet program.',
          'Content you send: food photos and/or text descriptions for analysis.',
          'Logs: food, exercise, weight entries, plus credit history and payment transactions.',
          'Technical data: usage logs for reliability and security.',
        ],
      ],
    },
    {
      heading: '2. How We Use Data',
      body: [
        'Data is used to:',
        [
          'Provide and improve the Service (nutrition analysis, summaries, charts).',
          'Compute calorie needs (BMR/TDEE) and recommendations.',
          'Process credit purchases and the referral program.',
          'Send Service-related notifications (e.g. credit balance, payment results).',
          'Maintain security and prevent abuse.',
        ],
      ],
    },
    {
      heading: '3. AI & Third-Party Processing',
      body: [
        'To generate nutrition estimates, the photos/text you send are processed by a third-party AI model provider. Only send content you are comfortable having processed.',
        'Payments are processed by Midtrans. We do not store your card/payment account details.',
        'The Service runs on the Telegram platform, which has its own privacy policy.',
      ],
    },
    {
      heading: '4. Storage & Security',
      body: [
        'We retain data while your account is active or as needed to provide the Service and meet legal obligations. We apply reasonable security measures, but no system is 100% secure.',
      ],
    },
    {
      heading: '5. Data Sharing',
      body: [
        'We do not sell your personal data. We share data only with service providers (e.g. AI, payments) to the extent needed to run the Service, or where required by law.',
      ],
    },
    {
      heading: '6. Your Rights',
      body: [
        'You can:',
        [
          'View and update your profile data via the bot.',
          'Delete your profile data & history via the /deleteme command in the bot.',
          'Request information about the data we hold via the feedback feature.',
        ],
      ],
    },
    {
      heading: '7. Children',
      body: [
        'The Service is not intended for children below the applicable minimum age. We do not knowingly collect data from such children.',
      ],
    },
    {
      heading: '8. Changes to This Policy',
      body: [
        'We may update this Privacy Policy at any time. Changes take effect when published.',
      ],
    },
    {
      heading: '9. Contact',
      body: [
        'Privacy questions can be sent via the feedback feature inside the bot.',
      ],
    },
  ],
};

export const TERMS: Record<Lang, LegalDoc> = { id: termsId, en: termsEn };
export const PRIVACY: Record<Lang, LegalDoc> = { id: privacyId, en: privacyEn };

export const LEGAL_LABELS = {
  id: { back: '← Kembali ke beranda', updated: 'Terakhir diperbarui' },
  en: { back: '← Back to home', updated: 'Last updated' },
};
