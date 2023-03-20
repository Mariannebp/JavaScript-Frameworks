import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Home from "./pages/home";
import Product from "./pages/product";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Product />} />
        <Route path="/pages/contact/" element={<Contact />} />
        <Route path="/pages/cart/" element={<Cart />} />
      </Route>
    </Routes>

  );
}

export default App;