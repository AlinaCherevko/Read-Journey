import { FC } from "react";
import Icon from "../../Icon/Icon";

interface MenuProps {
  onClose: () => void;
}

const CloseBtn: FC<MenuProps> = ({ onClose }) => {
  return (
    <button className="bg-transparent" type="button" onClick={onClose}>
      <Icon id="icon-close" stroke="#f9f9f9" width="28px" height="28px" />
    </button>
  );
};

export default CloseBtn;
