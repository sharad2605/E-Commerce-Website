import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { AuthContextProvider } from './store/auth-context.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ProductProvider } from './Component/Context/ProductContext.jsx';


createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <AuthContextProvider>
      <App />
  </AuthContextProvider>
  </ProductProvider>
  ,
)
