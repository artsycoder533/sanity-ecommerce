import { Category, Product } from '@/sanity.types'
import ProductGrid from './ProductGrid'
import CategorySelectorComponent from './ui/category-selector'

type Props = {
  products: Product[],
  categories: Category[],
}

const ProductsView = ({products, categories}: Props) => {
  return (
    <div>
      {/* categories */}
      <div className='flex flex-col'>
        <CategorySelectorComponent categories={categories} />
      </div>

      {/* products */}
      <div className='flex-1'>
        <div>
          <ProductGrid products={products} />

          <hr className='w-1/2 sm:w-3/4'/>
        </div>
      </div>
    </div>
  )
}

export default ProductsView