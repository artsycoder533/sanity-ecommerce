import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity"

export const searchProductsByName = async(searchParam: string) => {
  const PRODUCT_SEARCH_QUERY = defineQuery(`
    *[_type == 'product' && name match $searchParam] | order(name asc)
    `);

try {
  const products = await sanityFetch({
    query: PRODUCT_SEARCH_QUERY,
    params: {
      searchParam: `${searchParam}*`, //append wildcard for partial match
    },
  });

  return products.data || [];
} catch(error) {
  console.error('Error fetching all products: ', error);
  return [];
}
}