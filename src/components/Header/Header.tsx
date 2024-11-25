import { FC } from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import UserMenu from "../UserMenu/UserMenu";

const Header: FC = () => {
  return (
    <section className="pt-5 tablet:pt-8">
      <div className="wrapper">
        <div className="flex justify-between items-center p-4 w-full bg-gray-bg-color rounded-md">
          <Logo />
          <Navigation />
          <UserMenu />
        </div>
      </div>
    </section>
  );
};

export default Header;
