import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import SingleProduct from "./pages/SingleProduct";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
function App() {
  return (
    <div style={{ backgroundColor: "#cee1ff36" }}>
      <BrowserRouter>
        <div className="">
          {/* <Sidebar /> */}
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/product/:id" element={<SingleProduct />}></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
