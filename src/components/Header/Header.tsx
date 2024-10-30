import { FC } from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import UserMenu from "../UserMenu/UserMenu";

const Header: FC = () => {
  return (
    <>
      <div className="container1">
        <div className="flex justify-between items-center p-4 w-full bg-gray-bg-color rounded-md mt-5 tablet:mt-8">
          <Logo />
          <Navigation />
          <UserMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
