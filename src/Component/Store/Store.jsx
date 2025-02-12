import { Card } from "react-bootstrap";
import './Store.css'
const Store = () => {

    const productsArr = [
        {title: 'Colors',price: 100,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',},
        { title: 'Black and white Colors',price: 50,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',},
        {title: 'Yellow and Black Colors',price: 70,imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', },       
        {title: 'Blue Color',price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',},
        ]
    return (
        <>
        <div style={{ backgroundColor: 'gray', color: 'white', textAlign: 'center', padding: '80px 0' }}>    
            <h1 style={{ fontSize: '90px', fontWeight: 'bold' }}>The Generics</h1>
        </div>
        <h1 style={{textAlign:'center',fontFamily:'cursive'}}>Store</h1>
        <div className="container">
            <div className="row justify-content-center">
                {productsArr.map((product, index) => (
                    <div className="col-md-6 d-flex justify-content-center" key={index} >
                        <Card className="product-card">
                            <Card.Img variant="top" src={product.imageUrl} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <button className="btn btn-primary">Add to Cart</button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
        </>
    )
}
 export default Store;