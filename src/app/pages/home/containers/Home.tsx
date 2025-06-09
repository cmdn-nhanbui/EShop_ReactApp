import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { HeaderBanner } from '../../../shared/components/HeaderBanner';
import { SectionBanner } from '../components/SectionBanner';
import { SectionChoosing } from '../components/SectionChoosing';
import { ListProduct } from '../components/ListProduct';
import { SectionLetter } from '../components/SectionLetter';

import { useToast } from '../../../shared/hooks/useToast';
import { TOAST_TYPES } from '../../../core/constants/types';
import { fetchProducts } from '../../../../redux/actions/productActions';
import { type AppDispatch, type RootState } from '../../../../redux/store';

const Home = () => {
  const { data, loading, error } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  const { showToast } = useToast();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (error) {
    showToast({ type: TOAST_TYPES.ERROR, message: error, duration: 1000 });
  }

  return (
    <>
      <HeaderBanner />
      <SectionBanner />
      <ListProduct loading={loading} products={data} navigateMore='/products' title='Selected just for you' />
      <SectionChoosing />
      <ListProduct loading={loading} products={data} containerClassName='product-section' title='Product in today' />
      <SectionLetter />
    </>
  );
};

export default Home;
