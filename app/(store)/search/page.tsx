import ProductGrid from '@/components/ProductGrid';
import { searchProductsByName } from '@/lib/products/searchProductsByName';

type Props = {
  searchParams: Promise<{
    query: string;
  }>;
};

const SearchPage = async ({ searchParams }: Props) => {
  // in next15 we have to await this!
  const { query } = await searchParams;
  const products = await searchProductsByName(query);

  if (!products.length) {
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 roudned-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          No products found for: {query}
        </h1>
        <p className="text-gray-600 text-center">
          Try searching for different keywords
        </p>
      </div>
    </div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 roudned-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Search results for {query}
        </h1>
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default SearchPage;