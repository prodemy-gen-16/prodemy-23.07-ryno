import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";
import CatalogPage from "./pages/CatalogPage.jsx";

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
