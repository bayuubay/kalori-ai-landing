import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { TERMS } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan — Kalori AI',
  description: 'Syarat & Ketentuan penggunaan layanan Kalori AI.',
};

export default function TermsPage() {
  return <LegalPage doc={TERMS} />;
}
