import { sanityFetch } from "@/sanity/lib/live";
import { defineQuery } from "next-sanity"

export const getProductsByCategory = async(categorySlug: string) => {
  const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
    *[_type == 'product' && references(*[_type == 'category' && slug.current == $categorySlug]._id)] | order(name asc)
    `);
  
  try {
    const product = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });

    return product.data || [];
  } catch (error) {
    console.error('Error fetching product by ID: ', error);
    return [];
  }
}