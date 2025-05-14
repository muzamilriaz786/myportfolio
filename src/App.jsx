import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import './index.css';
import Home from './pages/home';
function App() {
  return (
    <>
      <Navbar />
      <Home/> 
      <Footer/>
    </>
  );
}

export default App;
