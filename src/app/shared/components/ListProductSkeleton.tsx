import { ProductCardSkeleton } from './ProductCardSkeleton';

export const ListProductSkeleton = () => {
  return (
    <section className='section selected-section'>
      <div className='container'>
        <div className='flex flex-col'>
          <ul className='row list-product-skeleton'>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </ul>
        </div>
      </div>
    </section>
  );
};
