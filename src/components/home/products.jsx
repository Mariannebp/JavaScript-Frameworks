import React from "react";
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

function Products() {
  const url = 'https://api.noroff.dev/api/v1/online-shop';
  const { data, isLoading, isError } = useApi(url);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Oops, something went wrong here..</div>;
  }

  return (
    <ProductsContainer>
      {data.map((d) => (
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
  )
}

export default Products;