import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

const SecondaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SecondaryLayout;
