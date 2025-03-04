import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const Header = () => {

   const authCtx = useContext(AuthContext);
   const navigate = useNavigate();
   const logoutHandler = () => {
    authCtx.logout(navigate);  // ✅ Pass `navigate` to logout function
  };



  return (
    <Navbar expand="lg" style={{ backgroundColor: "black" }} fixed="top"  variant="dark">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="mx-auto">
          <Nav.Link href="/Home" className="nav-link">
            HOME
          </Nav.Link>
          {authCtx.isLoggedIn && <Nav.Link href="/Store" className="nav-link">
            STORE
          </Nav.Link>
          }
          <Nav.Link href="/About" className="nav-link">
            ABOUT
          </Nav.Link>
          <Nav.Link href="/ContactUs" className="nav-link">
            CONTACT US
          </Nav.Link>
          {authCtx.isLoggedIn ? (
            <Nav.Link onClick={logoutHandler} className="nav-link">
                LOGOUT
            </Nav.Link>
              ) : (
               <Nav.Link onClick={() => navigate("/login")}className="nav-link">
                  LOGIN
                  </Nav.Link>
              )}

            <Cart />
          
          
        </Nav>
        <Navbar.Collapse />
      </Container>
    </Navbar>
  );
};

export default Header;
