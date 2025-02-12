import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Cart.css";

const Cart = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cartElements = [
    { title: "Colors", price: 100, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png", quantity: 2 },
    { title: "Black and white Colors", price: 50, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png", quantity: 3 },
    { title: "Yellow and Black Colors", price: 70, imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png", quantity: 1 },
  ];

  return (
    <>
      <button className="cart-button" onClick={handleShow}>Cart</button>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title className="cart-title">Cart Items</Modal.Title>
        </Modal.Header> 
        
        <Modal.Body>
          {/* New Heading */}
          <h2 className="cart-heading">Your Shopping Cart</h2>

          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartElements.map((product, index) => (
                <tr key={index} className="cart-item">
                  <td>
                    <img src={product.imageUrl} alt={product.title} className="cart-img" />
                  </td>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button className="btn btn-danger">Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button variant="primary" onClick={handleClose}>Checkout</Button>
        </Modal.Footer> 
      </Modal>
    </>
  );
};

export default Cart;
