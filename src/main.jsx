import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { ProductContextProvider } from './context/ProductContext.jsx'
import { CartProvider } from './context/CartContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >,
)
