import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import url from "../constants";
import Loading from "../styled/loading";
import * as price from "../styled/productDiscount";
import * as p from "../styled/product";
import BasicButton from "../styled/button";
import useCart from "../hooks/useCart";

function ProductSpecific() {
  let { id } = useParams();
  const { data, isLoading, isError } = useApi(url + id);
  const { addItemToCart } = useCart();

  useEffect(() => {
    document.title = `The One | ${data.title}`;
  })

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Oops, something went wrong here..</div>;
  }

  return (
    <p.ProductContainer>
      <p.ProductHeading1>{data.title}</p.ProductHeading1>
      {data.reviews && data.reviews.length > 0 ? <p.ProductRating>Rating: <p.ProductRatingNum>{data.rating}/5</p.ProductRatingNum></p.ProductRating> : <p.ProductRating>Rating: <p.ProductRatingNum>none</p.ProductRatingNum></p.ProductRating>}

      <p.ProductInfo>
        <p.ProductImg src={data.imageUrl} alt={data.title} />
        <p.ProductInfoBox>
          <div>
            <p.ProductInfoHeading>
              <p.ProductHeading2>Description</p.ProductHeading2>
              {data.price > data.discountedPrice ? <price.ProductDiscountContainer><price.ProductDiscount>{Math.round(((data.discountedPrice - data.price) / data.price) * 100)}%</price.ProductDiscount></price.ProductDiscountContainer> : null}
            </p.ProductInfoHeading>

            <p.ProductText>{data.description}</p.ProductText>
          </div>
          <p.AddToCartContainer>
            <p.ProductPrice>${data.discountedPrice}</p.ProductPrice>
            <BasicButton onClick={() => addItemToCart(id)}>Add to cart</BasicButton>
          </p.AddToCartContainer>
        </p.ProductInfoBox>
      </p.ProductInfo>
      <div>
        <h3>Reviews</h3>
        <div>
          {data.reviews && data.reviews.length ? data.reviews.map((d) => (
            <p.ReviewsContainer key={d.id}>
              <h4>{d.username}</h4>
              <p.ProductRating>Rating: {d.rating}</p.ProductRating>
              <p.ProductText>{d.description}</p.ProductText>
            </p.ReviewsContainer>
          )) : <p.ProductTextItalic>There are currently no reviews for this product.</p.ProductTextItalic>}
        </div>
      </div>
    </p.ProductContainer>
  )
}

export default ProductSpecific;