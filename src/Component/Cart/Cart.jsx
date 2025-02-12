import { useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { ProductContext } from "../Context/ProductContext";
import "./Cart.css";

const Cart = () => {
  const { cart, removeProduct } = useContext(ProductContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="cart-fixed">
        <button className="cart-button" onClick={handleShow}>
          Cart ({cart.reduce((total, item) => total + item.quantity, 0)})
        </button>
      </div>

      <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title className="cart-title">Cart Items</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h2 className="cart-heading">Your Shopping Cart</h2>
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty!</p>
          ) : (
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
                {cart.map((product, index) => (
                  <tr key={index} className="cart-item">
                    <td>
                      <img src={product.imageUrl} alt={product.title} className="cart-img" />
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>{product.quantity}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => removeProduct(product.title)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
