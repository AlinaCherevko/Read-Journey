import { FC } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
