import { Card } from "react-bootstrap";
import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import "./Store.css";

const Store = () => {
  const { addProduct } = useContext(ProductContext);

  const productsArr = [
    { title: "Colors", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png" },
    { title: "Black and white Colors", price: 50, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png" },
    { title: "Yellow and Black Colors", price: 70, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png" },
    { title: "Blue Color", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png" },
  ];

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center", fontFamily: "cursive" }}>Store</h1>
        <div className="row justify-content-center">
          {productsArr.map((product, index) => (
            <div className="col-md-6 d-flex justify-content-center" key={index}>
              <Card className="product-card">
                <Card.Img variant="top" src={product.imageUrl} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>${product.price}</Card.Text>
                  <button onClick={() => addProduct(product)} className="btn btn-primary">
                    Add to Cart
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Store;
