import { Container, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'gray', color: 'white', textAlign: 'center', padding: '80px 0' }}>
      <Container>
        <h1 style={{ fontSize: '90px', fontWeight: 'bold' }}>The Generics</h1>
        <Button 
          variant="outline-light" 
          style={{ fontSize: '18px', padding: '10px 20px', borderWidth: '2px', margin: '20px 0',borderColor: 'lightblue' }}>
          Get our Latest Album
        </Button>
        <div 
          style={{ 
            width: '70px', 
            height: '70px', 
            borderRadius: '50%', 
            border: '2px solid lightblue', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            margin: 'auto', 
            marginTop: '20px' 
          }}>
          <i  style={{ fontSize: '30px' }} class="bi bi-play-btn"></i>
        </div>
      </Container>
    </div>
  );
};

export default Home;
