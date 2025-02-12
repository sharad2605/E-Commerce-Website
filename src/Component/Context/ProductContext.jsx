import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((prod) => prod.title === item.title);

      if (existingItem) {
        return prevCart.map((prod) =>
          prod.title === item.title ? { ...prod, quantity: prod.quantity + 1 } : prod
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeProduct = (title) => {
    setCart((prevCart) => prevCart.filter((item) => item.title !== title));
  };

  return (
    <ProductContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
