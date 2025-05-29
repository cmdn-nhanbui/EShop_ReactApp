import type { ChooseItemProps } from '../../../core/constants/types';
import { ChooseItem } from '../../../shared/components/ChooseItem';
import { Icon } from '../../../shared/components/Icons';

const choosingItems: ChooseItemProps[] = [
  {
    icon: <Icon icon='truck' width={34} height={34} className='choosing-icon' color='inherit' />,
    title: 'Free Shipping',
    description: 'All purchases over $199 are eligible forfree shipping via USPS First Class Mail.',
  },
  {
    icon: <Icon icon='payment' width={34} height={34} className='choosing-icon' color='inherit' />,
    title: 'Easy Payments',
    description: 'All payments are processed instantlyover a secure payment protocol.',
  },
  {
    icon: <Icon icon='guarantee' width={34} height={34} className='choosing-icon' color='inherit' />,
    title: 'Money-Back Guarantee',
    description: "If an item arrived damaged or you'vechanged your mind, you can send itback for a full refund.",
  },
  {
    icon: <Icon icon='material' width={34} height={34} className='choosing-icon' color='inherit' />,
    title: 'Finest Quality',
    description: 'Designed to last, each of our products hasbeen crafted with the finest materials.',
  },
];

export const SectionChoosing = () => {
  return (
    <section className='section section-choosing'>
      <div className='container'>
        <h3 className='section-title text-center'>Why should you choose us?</h3>
        <ul className='row'>
          {choosingItems?.map((item, index) => {
            return <ChooseItem key={index} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};
