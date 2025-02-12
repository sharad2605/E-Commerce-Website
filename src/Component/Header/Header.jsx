import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'black' }} variant="dark">
      <Container className="justify-content-center">
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        <Nav className="mx-auto">
        
        
          <Nav.Link href="#home" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            HOME
          </Nav.Link>
          <Nav.Link href="#store" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', margin: '0 20px' }}>
            STORE
          </Nav.Link>
          <Nav.Link href="#about" style={{ color: 'white', fontSize: '18px', fontWeight: 'bold' }}>
            ABOUT
          </Nav.Link>
        </Nav>
        <Navbar.Collapse/>
      </Container>
    </Navbar>
  );
};

export default Header;
