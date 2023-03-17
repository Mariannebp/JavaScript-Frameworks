import React from "react";
import Products from "../../components/home/products";
import SearchBar from "../../components/home/searchbar";
import Heading1 from "../../components/styled/heading1";
import HomeContainer from "../../components/styled/homeContainer";

function Home() {
  return (
    <HomeContainer>
      <Heading1>The One and Online Shop</Heading1>
      <SearchBar />
      <Products />
    </HomeContainer>
  )
}

export default Home;