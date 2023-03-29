import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Product from "./pages/product";
import Checkout from "./pages/checkout";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pages/product/:id" element={<Product />} />
        <Route path="/pages/contact/" element={<Contact />} />
        <Route path="/pages/cart/" element={<Cart />} />
        <Route path="/pages/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;