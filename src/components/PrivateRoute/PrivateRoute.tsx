import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuth } from "../../redux/auth/authSelectors";
import { Route } from "../RestrictedRoute/RestrictedRoute";

const PrivateRoute: FC<Route> = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
