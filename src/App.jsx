
import Header from "./Component/Header/Header";
import Store from "./Component/Store/Store";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Footer/Footer";
import { ProductProvider } from "./Component/Context/ProductContext";

function App() {
  return (
    <ProductProvider>
      <Header />
      <Store />
      <Cart />
      <Footer />
    </ProductProvider>
  );
}

export default App;
