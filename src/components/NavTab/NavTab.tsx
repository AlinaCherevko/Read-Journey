import { FC } from "react";
import { NavLink } from "react-router-dom";

type NavLinkProps = {
  to: string;
  text: string;
};

const NavTab: FC<NavLinkProps> = ({ to, text }) => {
  return (
    <NavLink className="text-base hover:text-primary-white" to={to}>
      {text}
    </NavLink>
  );
};

export default NavTab;
