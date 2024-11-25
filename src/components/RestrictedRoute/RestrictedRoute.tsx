import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/authSelectors";

export type Route = {
  children: React.ReactNode;
};

const RestrictedRoute: FC<Route> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? <Navigate to="/" /> : children;
};

export default RestrictedRoute;
