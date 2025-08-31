import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className=" w-full mx-auto">
      <Header />
      <main className="max-w-6xl mx-auto flex justify-between items-center">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
