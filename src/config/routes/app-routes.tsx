import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import { PATHS } from "./paths";
import { HomePage } from "@/pages/Home";

export const AppRoutes = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route element={<HomePage />} path="/" />

      {PATHS.map(({ element, path }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  </BrowserRouter>
);
