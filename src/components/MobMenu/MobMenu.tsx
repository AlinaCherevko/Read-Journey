import { FC } from "react";
import CloseBtn from "./CloseBtn/CloseBtn";
import Button from "../Button/Button";
import { logOut } from "../../redux/auth/authOperations";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import NavTab from "../NavTab/NavTab";
import { useTranslation } from "react-i18next";

interface MenuProps {
  onClose: () => void;
}

const MobMenu: FC<MenuProps> = ({ onClose }) => {
  const dispatch: AppDispatch = useDispatch();

  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className="p-10 bg-light-bg-color flex flex-col justify-between menu">
      <CloseBtn onClose={onClose} />
      <div className="flex flex-col gap-5">
        <NavTab to="/" text={t("home")} />
        <NavTab to="/library" text={t("library")} />
      </div>
      <Button type="button" text={t("Log out")} onClick={handleLogout} />
    </div>
  );
};

export default MobMenu;
