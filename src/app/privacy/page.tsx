import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { PRIVACY } from '@/lib/legal';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi — Kalori AI',
  description: 'Kebijakan Privasi layanan Kalori AI.',
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY} />;
}
