import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const Library = lazy(() => import("./pages/Library/Library"));
const Recommended = lazy(() => import("./pages/Recommended/Recommended"));
const Reading = lazy(() => import("./pages/Reading/Reading"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/recommended" element={<Recommended />} />
          <Route path="/library" element={<Library />} />
          <Route path="/reading" element={<Reading />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
