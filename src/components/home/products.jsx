import React from "react";
import useApi from "../hooks/useApi";
import ProductsLink from "../styled/products/productsLink";
import Heading2 from "../styled/heading2";
import Loading from "../styled/loading";
import ProductCard from "../styled/products/productCard";
import ProductsContainer from "../styled/products/productsContainer";
import ProductsImg from "../styled/products/productsImg";
import ProductsPrice from "../styled/products/productsPrice";
import ProductsPriceContainer from "../styled/products/productsPriceContainer";
import ProductsPriceDiscount from "../styled/products/productsPriceDiscount";

function Products() {
  const url = 'https://api.noroff.dev/api/v1/online-shop';
  const { data, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Oops, something went wrong where..</div>;
  }

  return (
    <ProductsContainer>
      {data.map((d) => (
        <ProductsLink to="/">
          <ProductCard key={d.id}>
            <ProductsImg src={d.imageUrl} alt={d.title} />
            <Heading2>{d.title}</Heading2>
            <ProductsPriceContainer>
              {d.price === d.discountedPrice ? <ProductsPrice>${d.price}</ProductsPrice> : <ProductsPrice>${d.discountedPrice}</ProductsPrice>}
              {d.price > d.discountedPrice ? <ProductsPriceDiscount>{Math.round(((d.discountedPrice - d.price) / d.price) * 100)}%</ProductsPriceDiscount> : null}
            </ProductsPriceContainer>
          </ProductCard>
        </ProductsLink>
      ))}
    </ProductsContainer>
  )
}

export default Products;