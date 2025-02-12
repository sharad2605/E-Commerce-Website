import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Store from "./Component/Store/Store";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Footer/Footer";
import { ProductProvider } from "./Component/Context/ProductContext";
import About from "./Component/About/About";

const router = createBrowserRouter([
  {  path: "/", element: <Home /> },
  {  path: "/store", element: <Store /> },
  {  path: "/about", element: <About /> },
])
function App() {
  return (
    
    <ProductProvider>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </ProductProvider>
  );
}

export default App;
