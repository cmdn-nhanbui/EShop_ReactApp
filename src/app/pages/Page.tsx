import { Outlet } from "react-router-dom";
import { Header } from "../shared/components/Header";

const Page = () => {
  return (
    <div className="pages-container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Page;
