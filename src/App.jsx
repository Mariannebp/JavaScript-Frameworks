// import logo from './logo.svg';
// import './App.css';

import React from "react";
import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/layout/layout";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Home from "./pages/home";
import "./styles/styles.css";

const Heading = styled.h2`
  color: ${(props) => props.theme.color.primary};
  padding: 10px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.color.secondary};
  padding: 10px;
  margin: 10px;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
`;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pages/contact/" element={<Contact />} />
        <Route path="/pages/cart/" element={<Cart />} />
      </Route>
    </Routes>

  );
}

export default App;
