import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './pages/Navbar';

function App() {


  


  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
