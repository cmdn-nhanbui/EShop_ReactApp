export const ProductCardSkeleton = () => {
  return (
    <li className='product-skeleton-item col col-3 col-sm-6 col-md-6'>
      <span className='skeleton product-image-skeleton'>&zwnj;</span>
      <div className='flex flex-col'>
        <span className='skeleton product-title-skeleton'>&zwnj;</span>
        <span className='skeleton product-title-skeleton'>&zwnj;</span>
      </div>
    </li>
  );
};
