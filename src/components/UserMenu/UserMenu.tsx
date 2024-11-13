import { FC, useState } from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logOut } from "../../redux/auth/authOperations";
import { selectUser } from "../../redux/auth/authSelectors";
import BurgerBtn from "../MobMenu/BurgerBtn/BurgerBtn";
import MobMenu from "../MobMenu/MobMenu";

const UserMenu: FC = () => {
  const [isVisibleMobMenu, setIsVisibleMobMenu] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector(selectUser);

  const onClose = () => {
    setIsVisibleMobMenu(false);
  };

  const onOpen = () => {
    setIsVisibleMobMenu(true);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <div className="flex gap-4 items-center ">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 flex items-center justify-center text-primary-white text-medium bg-light-bg-color rounded-full border border-main-border-color tablet:w-10 tablet:h-10">
            {user.name.slice(0, 1).toUpperCase()}
          </div>
          <span className=" hidden desktop:flex text-primary-white text-medium">
            {user.name}
          </span>
        </div>

        {user && <BurgerBtn onOpen={onOpen} />}
        <div className="hidden tablet:flex">
          <Button type="button" text="Log out" onClick={handleLogout} />
        </div>
      </div>
      {isVisibleMobMenu && <MobMenu onClose={onClose} />}
    </>
  );
};

export default UserMenu;
