import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import Store from "./Component/Store/Store";
import Cart from "./Component/Cart/Cart";
import Footer from "./Component/Footer/Footer";
import { ProductProvider } from "./Component/Context/ProductContext";
import About from "./Component/About/About";
import ContactUs from "./Component/ContactUs/ContactUs";
import ProductDetails from "./Component/Store/ProductDetails";
import Login from "./Component/Login/Login";

const router = createBrowserRouter([
  {  path: "/", element: <Home /> },
  {  path: "/Home", element: <Home /> },
  {  path: "/store", element: <Store /> },
  {  path: "/about", element: <About /> },
  {  path: "/cart", element: <Cart /> },
  {  path: "/ContactUs", element: <ContactUs />},
  {  path: "/product/:title", element: <ProductDetails />},
  {  path: "/Login", element: <Login /> },
]);
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
