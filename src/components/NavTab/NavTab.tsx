import { FC } from "react";
import { NavLink } from "react-router-dom";
import { NavLinkProps } from "./types";

const NavTab: FC<NavLinkProps> = ({ to, text }) => {
  return (
    <NavLink className="text-base hover:text-primary-white" to={to}>
      {text}
    </NavLink>
  );
};

export default NavTab;
