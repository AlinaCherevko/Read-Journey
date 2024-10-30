import { FC } from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { logOut } from "../../redux/auth/authOperations";
import { toast } from "react-toastify";
import { selectIsAuth } from "../../redux/auth/authSelectors";

const UserMenu: FC = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch: AppDispatch = useDispatch();
  console.log(isAuth);

  const handleLogout = () => {
    dispatch(logOut());
    toast.success("User logged out");
  };
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
        <Button type="button" text="Log out" onClick={handleLogout} />
      </div>
    </div>
  );
};

export default UserMenu;
