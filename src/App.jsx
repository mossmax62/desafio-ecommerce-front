import { Routes, Route } from 'react-router-dom'
import Navigation from './components/menu/Navigation'
import ProtectedRoute from './components/auth/ProtectedRoute' // Import the ProtectedRoute component

import './main.css'
import SingIn from './components/auth/SingIn'
import SingUp from './components/auth/SingUp'
import Home from './pages/Home'
import ShoppingCart from './components/cart/ShoppingCart'
import Favoritos from './pages/Favoritos'
import UserProfile from './pages/UserProfile'
import ManageProductsView from './pages/ManageProducts'
import CarDetails from './pages/CarDetails'
import Footer from './components/footer/Footer'

function App () {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/user-profile'
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path='/shopping-cart'
          element={
            <ProtectedRoute>
              <ShoppingCart />
            </ProtectedRoute>
          }
        />
        <Route
          path='/manage-products'
          element={
            <ProtectedRoute>
              <ManageProductsView />
            </ProtectedRoute>
          }
        />
        <Route
          path='/favoritos'
          element={<Favoritos />}
        />

        <Route
          path='/sign-in'
          element={<SingIn />}
        />
        <Route
          path='/sign-up'
          element={<SingUp />}
        />
        <Route
          path='/car/:id'
          element={<CarDetails />}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
