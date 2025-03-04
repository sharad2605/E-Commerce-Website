import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import AuthContext from "./store/auth-context";
import { useContext } from "react";

function App() {

  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Router> {/* ✅ Wrap everything inside BrowserRouter */}
      <ProductProvider>
        <Header />
        <Routes> {/* ✅ Define all routes inside <Routes> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={isLoggedIn ? <Store /> : <Navigate to="/login" />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/product/:title" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </ProductProvider>
    </Router>
  );
}

export default App;
