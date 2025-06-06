import clsx from 'clsx';

import { Button } from '../../../shared/components/Button';
import { ProductCard } from '../../../shared/components/ProductCard';
import { PRODUCTS } from '../data.example';

type ListProductProps = {
  navigateMore?: string;
  title: string;
  containerClassName?: string;
};

export const ListProduct = ({ navigateMore, title, containerClassName }: ListProductProps) => {
  const containerClass = clsx('section selected-section', containerClassName);

  const headerClass = clsx('selected-header flex items-center', {
    'justify-center': !navigateMore,
    'justify-between': navigateMore,
  });

  return (
    <section className={containerClass}>
      <div className='container'>
        <div className='flex flex-col'>
          <div className={headerClass}>
            <h3 className='section-title selected-title'>{title}</h3>
            {navigateMore && (
              <a href={navigateMore} className='selected-button'>
                <Button variant='OUTLINED' rounded>
                  SHOW MORE
                </Button>
              </a>
            )}
          </div>
          <ul id='selected-list' className='row'>
            {PRODUCTS?.map((product, index: number) => {
              return (
                <ProductCard
                  key={index}
                  id={product?.id}
                  name={product?.name}
                  discountValue={product?.discountValue}
                  price={product?.price}
                  thumbnail={product?.thumbnail}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
