import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import CatalogPage from "../pages/CatalogPage.jsx";
import ProductDetailPage from "../pages/ProductDetailPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import ContactsPage from "../pages/ContactsPage.jsx";
import CartPage from "../pages/CartPage.jsx";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/not-found" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
