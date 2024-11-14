import { FC } from "react";
import Icon from "../../Icon/Icon";

interface BurgerBtnProps {
  onOpen: () => void;
}

const BurgerBtn: FC<BurgerBtnProps> = ({ onOpen }) => {
  return (
    <button
      className="bg-transparent tablet:hidden"
      type="button"
      onClick={onOpen}
    >
      <Icon id="icon-menu" stroke="#f9f9f9" width="28px" height="28px" />
    </button>
  );
};

export default BurgerBtn;
