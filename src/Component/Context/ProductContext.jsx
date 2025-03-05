import { createContext, useState ,useContext,useEffect} from "react";
import axios from "axios";
import AuthContext from "../../store/auth-context";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const authCtx = useContext(AuthContext);
  const userEmail  =authCtx.email;

  const sanitizeEmail = (email) => email.replace(/[@.]/g, ""); // ✅ Email sanitize
  const sanitizedEmail = userEmail ? sanitizeEmail(userEmail) : null;
  
let baseURL = "https://crudcrud.com/api/e9a70a3ace864e029def336e96df1bd0";
let url = `${baseURL}/cart${sanitizedEmail}`;

  

  useEffect(() => {
    if (sanitizedEmail) {
      console.log("Fetching cart for:", sanitizedEmail);
      getItems();
    }
}, [sanitizedEmail]); 

  

const addProduct = async (item) => {
  if (!sanitizedEmail) return; 
  console.log(item);

  const existingItem = cart.find((prod) => prod.title === item.title);

  if (existingItem) { 
    const updatedItem = {
      title: existingItem.title,
      price: existingItem.price,
      imageUrl: existingItem.imageUrl,
      quantity: existingItem.quantity + 1,
    };

    try {
      await axios.put(`${url}/${existingItem._id}`, updatedItem); // ✅ Pehle backend update hone do
      setCart((prevCart) =>
        prevCart.map((prod) =>
          prod._id === existingItem._id ? { ...prod, quantity: prod.quantity + 1 } : prod
        )
      ); // ✅ Phir UI update karo
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  } else {
    try {
      const res = await axios.post(url, { ...item, quantity: 1 });
      const postedItem = res.data;
      setCart((prevCart) => [...prevCart, postedItem]);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }
};



  const getItems = async () => {
    try {
      const res = await axios.get(url); // Fetch cart items
      setCart(res.data); // Update the cart state with fetched data
      console.log("Cart items fetched:", res.data);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  


  const removeProduct = async(id) => {
    try {
      await axios.delete(`${url}/${id}`); // Delete from API
      setCart((prevCart) => prevCart.filter((item) => item._id !== id)); // Update UI
      console.log(`Product with ID ${id} removed`);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <ProductContext.Provider value={{ cart, addProduct, removeProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
