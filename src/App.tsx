import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Loader from "./components/Loader/Loader";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./redux/store";
import { getCurrentUser } from "./redux/auth/authOperations";
import { selectRefreshing } from "./redux/auth/authSelectors";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const Library = lazy(() => import("./pages/Library/Library"));
const Reading = lazy(() => import("./pages/Reading/Reading"));

function App() {
  const dispatch: AppDispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
          path="library"
          element={
            <PrivateRoute>
              <Library />
            </PrivateRoute>
          }
        />
        <Route
          path="reading"
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
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
