import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/scss/index.scss";

import { NotFoundPage, OffersPage } from "./pages";
import { Layout } from "./shared";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<OffersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
