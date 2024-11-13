import { FC } from "react";
import CloseBtn from "./CloseBtn/CloseBtn";
import Button from "../Button/Button";
import { logOut } from "../../redux/auth/authOperations";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import NavTab from "../NavTab/NavTab";

interface MenuProps {
  onClose: () => void;
}

const MobMenu: FC<MenuProps> = ({ onClose }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="p-10 bg-light-bg-color flex flex-col justify-between menu">
      <CloseBtn onClose={onClose} />
      <div className="flex flex-col gap-5">
        <NavTab to="/" text="Home" />
        <NavTab to="/library" text="My library" />
      </div>
      <Button type="button" text="Log out" onClick={handleLogout} />
    </div>
  );
};

export default MobMenu;
