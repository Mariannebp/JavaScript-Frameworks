import React from "react";
import Products from "../../components/home/products";
import HomeContainer from "../../components/styled/homeContainer";

/**
 * Renders the content of the home page.
 */
function Home() {
  return (
    <HomeContainer>
      <h1>The One and Online Shop</h1>
      <Products />
    </HomeContainer>
  )
}

export default Home;