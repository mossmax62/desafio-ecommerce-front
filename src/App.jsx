import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ProtectedRoute from './components/ProtectedRoute' // Import the ProtectedRoute component


import './main.css'
import SingIn from './views/SingIn';
import SingUp from './views/SingUp';
import Home from './views/Home';
import ShoppingCart from './views/ShoppingCart';
import Notifications from './views/Notifications';
import UserProfile from './views/UserProfile';
import ManageProductsView from './views/ManageProductsView';

function App() {


  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shopping-cart"
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
          path="/notifications"
          element={<Notifications />}
        />

        <Route
          path="/sign-in"
          element={<SingIn />}
        />
        <Route
          path="/sign-up"
          element={<SingUp />}
        />
      </Routes>
    </div>
  );
}

export default App
