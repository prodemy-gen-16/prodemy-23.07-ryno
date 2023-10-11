import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import CatalogPage from "../pages/CatalogPage.jsx";

function App() {
  return (
    <>
      <Header />
      <Main>
        <CatalogPage />
      </Main>
      <Footer />
    </>
  );
}

export default App;
