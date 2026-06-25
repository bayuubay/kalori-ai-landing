import { API_BASE_URL } from './config';

/** A purchasable credit pack, as returned by GET /credit-packs. */
export interface CreditPack {
  id: string;
  credits: number;
  label: string;
  amountIdr: number;
  discountPct: number;
  finalAmountIdr: number;
}

/**
 * The free starter pack shown as the first catalog card. Not a purchasable
 * product — every new user gets it once, so it's hardcoded here rather than
 * coming from the credit_packs table.
 */
export const FREE_PACK: CreditPack = {
  id: 'free',
  credits: 30,
  label: '30 kredit',
  amountIdr: 0,
  discountPct: 0,
  finalAmountIdr: 0,
};

/**
 * Fetch enabled credit packs from the API. Revalidated every 60s so dashboard
 * price edits show up within a minute without a redeploy. Returns [] on failure
 * so the page still renders (with just the free card).
 */
export async function fetchCreditPacks(): Promise<CreditPack[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/credit-packs`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = (await res.json()) as { packs?: CreditPack[] };
    return data.packs ?? [];
  } catch {
    return [];
  }
}

/** Format an IDR amount like "Rp39.000". */
export function formatIdr(amount: number): string {
  return `Rp${amount.toLocaleString('id-ID')}`;
}
