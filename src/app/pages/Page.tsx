import { Outlet } from "react-router";
import { Header } from "../shared/components/Header";
import { Footer } from "../shared/components/Footer";

const Page = () => {
  return (
    <div className="pages-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Page;
