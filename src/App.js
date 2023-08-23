import React from "react";
import { Routes,Route} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "./components/organisms/Header/Header";
import Footer from "./components/organisms/Footer/Footer";
import Home from "./components/pages/Home/Home";
import Products from "./components/pages/Products/Products";
import Signin from "./components/pages/Signin/Signin";
import Register from "./components/pages/Register/Register";
import CartPage from "./components/pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
     
      <Router>
      <Header />
      <Routes>
     
    
        <Route exact path="/" element={<Home />}/>
        <Route path="/products/:id" element={<Products/>} />
        <Route path="/products" element={<Products/>} />
       
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/register" element={<Register />} />

        <Route
          exact
          path="/cartpage"
          element={<CartPage />}
        />
    </Routes>
    <Footer />
    </Router>

    </div>
  );
}

export default App;
