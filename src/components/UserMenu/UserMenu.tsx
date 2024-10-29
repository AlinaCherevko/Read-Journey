import { FC } from "react";
import Button from "../Button/Button";

const UserMenu: FC = () => {
  return (
    <div className="flex gap-4 items-center ">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 flex items-center justify-center text-primary-white text-medium bg-transparent rounded-full border border-main-border-color tablet:w-10 tablet:h-10">
          U
        </div>
        <span className=" hidden desktop:flex text-primary-white text-medium">
          User name
        </span>
      </div>
      <div className="hidden tablet:flex">
        <Button type="button" text="Log out" />
      </div>
    </div>
  );
};

export default UserMenu;
