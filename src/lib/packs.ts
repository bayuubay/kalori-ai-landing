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

/** Effective price per credit for a paid pack (lower = better value). */
export function pricePerCredit(pack: CreditPack): number {
  if (pack.credits <= 0) return Infinity;
  return pack.finalAmountIdr / pack.credits;
}

/**
 * Id of the paid pack with the cheapest price per credit ("best value").
 * Ignores the free pack and any zero-priced pack. Returns null when there is
 * fewer than two paid packs (no meaningful comparison to highlight).
 */
export function bestValuePackId(packs: CreditPack[]): string | null {
  const paid = packs.filter(
    (p) => p.id !== FREE_PACK.id && p.finalAmountIdr > 0 && p.credits > 0,
  );
  if (paid.length < 2) return null;
  let best = paid[0];
  for (const p of paid) {
    if (pricePerCredit(p) < pricePerCredit(best)) best = p;
  }
  return best.id;
}
