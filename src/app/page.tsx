import HomeClient from './HomeClient';
import { fetchCreditPacks } from '@/lib/packs';

// Server component: fetch the live credit-pack catalog, then render the
// interactive (client) page with it. Revalidation is set in fetchCreditPacks.
export default async function Page() {
  const packs = await fetchCreditPacks();
  return <HomeClient packs={packs} />;
}
