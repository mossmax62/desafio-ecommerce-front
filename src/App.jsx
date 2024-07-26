import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'


import './main.css'
import SingIn from './views/SingIn';
import SingUp from './views/SingUp';
import Home from './views/Home';

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
