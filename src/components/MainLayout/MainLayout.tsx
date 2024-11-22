import { FC, Suspense } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";

const MainLayout: FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default MainLayout;
