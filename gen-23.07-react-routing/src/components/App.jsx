import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import CatalogPage from "../pages/CatalogPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
