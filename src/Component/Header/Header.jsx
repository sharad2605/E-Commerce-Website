import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import Cart from "../Cart/Cart";

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: "black" }} fixed="top"  variant="dark">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="mx-auto">
          <Nav.Link href="/Home" className="nav-link">
            HOME
          </Nav.Link>
          <Nav.Link href="/Store" className="nav-link">
            STORE
          </Nav.Link>
          <Nav.Link href="/About" className="nav-link">
            ABOUT
          </Nav.Link>
          <Nav.Link href="/ContactUs" className="nav-link">
            CONTACT US
          </Nav.Link>
            <Cart />
          
          
        </Nav>
        <Navbar.Collapse />
      </Container>
    </Navbar>
  );
};

export default Header;
