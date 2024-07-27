import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'


import './main.css'
import SingIn from './views/SingIn';
import SingUp from './views/SingUp';
import Home from './views/Home';
import ShoppingCart from './views/ShoppingCart';
import Notifications from './views/Notifications';

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
    path="/shopping-cart"
    element={<ShoppingCart />}
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
