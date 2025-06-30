import { getItems } from '@/lib/actions/items';
import { SearchParams } from 'nuqs/server';
import { ProductTable } from './product-tables';
import { columns } from './product-tables/columns';

type ProductListingPageProps = {
  searchParams: SearchParams;
};

export default async function ProductListingPage({
  searchParams
}: ProductListingPageProps) {
  const urlSearchParams = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((v) => urlSearchParams.append(key, v));
      } else {
        urlSearchParams.append(key, value as string);
      }
    }
  });

  const { items, total } = await getItems(urlSearchParams);

  return <ProductTable columns={columns} data={items} totalItems={total} />;
}
