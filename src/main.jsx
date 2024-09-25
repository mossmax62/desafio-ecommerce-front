import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import { ProductContextProvider } from './contexts/ProductContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <AuthProvider>
        <ProductContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductContextProvider>
      </AuthProvider>
    </HashRouter>
  </React.StrictMode>
)
