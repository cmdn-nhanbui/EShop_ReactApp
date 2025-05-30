import { HeaderBanner } from '../../../shared/components/HeaderBanner'
import { SectionBanner } from '../components/SectionBanner'
import { SectionChoosing } from '../components/SectionChoosing'
import { ListProduct } from '../components/ListProduct'
import { SectionLetter } from '../components/SectionLetter'

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <main>
        <SectionBanner />
        <ListProduct navigateMore='/products' title='Selected just for you' />
        <SectionChoosing />
        <ListProduct containerClassName='product-section' title='Product in today' />
        <SectionLetter />
      </main>
    </div>
  )
}

export default Home
