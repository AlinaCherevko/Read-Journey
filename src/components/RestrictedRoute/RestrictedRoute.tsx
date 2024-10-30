import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { Route } from "./types";

const RestrictedRoute: FC<Route> = ({ redirectTo = "/", children }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
