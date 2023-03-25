import React, { useState } from "react";
import url from "../constants";
import useApi from "../hooks/useApi";
import Loading from "../styled/loading";
import * as p from "../../components/styled/products"
import * as price from "../styled/productDiscount";
import SearchBar from "./searchbar";

function Products() {
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
      <p.ProductsContainer>
        {data
          .filter((d) => {
            return searchInput.toLowerCase() === d.title.toLowerCase ? d : d.title.toLowerCase().includes(searchInput);
          })
          .map((d) => (
            <p.ProductsLink to={`${d.id}`} key={d.id}>
              <p.ProductCard>
                <p.ProductsImg src={d.imageUrl} alt={d.title} />
                <h2>{d.title}</h2>
                <p.ProductsPriceContainer>
                  <p.ProductsPrice>${d.discountedPrice}</p.ProductsPrice>
                  {d.price > d.discountedPrice ? <price.ProductDiscountContainer><price.ProductDiscount>{Math.round(((d.discountedPrice - d.price) / d.price) * 100)}%</price.ProductDiscount></price.ProductDiscountContainer> : null}
                </p.ProductsPriceContainer>
              </p.ProductCard>
            </p.ProductsLink>
          ))
        }
      </p.ProductsContainer >
    </div>
  )
}

export default Products;