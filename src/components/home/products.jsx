import React, { useState } from "react";
import useApi from "../hooks/useApi";
import ProductsLink from "../styled/products/productsLink";
import Loading from "../styled/loading";
import ProductCard from "../styled/products/productCard";
import ProductsContainer from "../styled/products/productsContainer";
import ProductsImg from "../styled/products/productsImg";
import ProductsPrice from "../styled/products/productsPrice";
import ProductsPriceContainer from "../styled/products/productsPriceContainer";
import ProductDiscountContainer from "../styled/productDiscount/productDiscountContainer";
import ProductDiscount from "../styled/productDiscount/productDiscount";
import SearchBar from "./searchbar";

function Products() {
  const url = 'https://api.noroff.dev/api/v1/online-shop';
  const { data, isLoading, isError } = useApi(url);
  const [searchInput, setSearchInput] = useState("");

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Oops, something went wrong here..</div>;
  }

  return (
    <div>
      <SearchBar searchInput={searchInput} onSearchInput={setSearchInput} data={data} />
      <ProductsContainer>
        {data
          .filter((d) => {
            return searchInput.toLowerCase() === d.title.toLowerCase ? d : d.title.toLowerCase().includes(searchInput);
          })
          .map((d) => (
            <ProductsLink to={`${d.id}`} key={d.id}>
              <ProductCard>
                <ProductsImg src={d.imageUrl} alt={d.title} />
                <h2>{d.title}</h2>
                <ProductsPriceContainer>
                  <ProductsPrice>${d.discountedPrice}</ProductsPrice>
                  {d.price > d.discountedPrice ? <ProductDiscountContainer><ProductDiscount>{Math.round(((d.discountedPrice - d.price) / d.price) * 100)}%</ProductDiscount></ProductDiscountContainer> : null}
                </ProductsPriceContainer>
              </ProductCard>
            </ProductsLink>
          ))
        }
      </ProductsContainer >
    </div>
  )
}

export default Products;