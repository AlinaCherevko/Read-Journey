import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Loader from "./components/Loader/Loader";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import {
  getCurrentUser,
  refreshCurrentUser,
} from "./redux/auth/authOperations";
import { selectRefreshing, selectToken } from "./redux/auth/authSelectors";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const Library = lazy(() => import("./pages/Library/Library"));
//const Recommended = lazy(() => import("./pages/Recommended/Recommended"));
const Reading = lazy(() => import("./pages/Reading/Reading"));

function App() {
  const dispatch: AppDispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);
  const token = useSelector(selectToken);
  //const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    if (!token) dispatch(refreshCurrentUser());
  }, [dispatch, token]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path="/library"
            element={
              <PrivateRoute>
                <Library />
              </PrivateRoute>
            }
          />
          <Route
            path="/reading"
            element={
              <PrivateRoute>
                <Reading />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/register"
          element={
            <RestrictedRoute>
              <RegisterPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}

export default App;
