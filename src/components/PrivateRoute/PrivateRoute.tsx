import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { Route } from "../RestrictedRoute/types";

const PrivateRoute: FC<Route> = ({ children, redirectTo = "/login" }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
