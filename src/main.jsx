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

const rainContainer = document.getElementById('root')

function createRaindrop () {
  const raindrop = document.createElement('div')
  raindrop.classList.add('raindrop')
  raindrop.style.left = `${Math.random() * 100}vw`
  raindrop.style.animationDuration = `${Math.random() * 1 + 0.5}s`
  raindrop.style.opacity = Math.random()
  rainContainer.appendChild(raindrop)

  setTimeout(() => {
    raindrop.remove()
  }, 2000)
}

setInterval(createRaindrop, 50)
