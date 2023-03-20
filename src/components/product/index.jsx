import React from "react";
import { useParams } from "react-router-dom";
import useApi from "../hooks/useApi";
import Loading from "../styled/loading";
import ProductContainer from "../styled/product/productContainer";
import ProductRating from "../styled/product/productRating";
import ProductRatingNum from "../styled/product/productRatingNum";
import ProductImg from "../styled/product/productImg";
import ProductInfo from "../styled/product/productInfo";
import ProductInfoBox from "../styled/product/productInfoBox";
import ProductText from "../styled/product/productText";
import ProductPrice from "../styled/product/productPrice";
import ProductInfoHeading from "../styled/product/productInfoHeading";
import ProductHeading2 from "../styled/product/productHeading2";
import ProductDiscountContainer from "../styled/productDiscount/productDiscountContainer";
import ProductDiscount from "../styled/productDiscount/productDiscount";
import BasicButton from "../styled/button";
import AddToCart from "../styled/product/addToCart";
import ProductTextItalic from "../styled/product/productTextItalic";
import ReviewsContainer from "../styled/product/reviewsContainer";
import ProductHeading1 from "../styled/product/productHeading1";


function ProductSpecific() {
  let { id } = useParams();
  const url = 'https://api.noroff.dev/api/v1/online-shop/';
  const { data, isLoading, isError } = useApi(url + id);

  console.log(data)
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div>Oops, something went wrong here..</div>;
  }

  return (
    <ProductContainer>
      <ProductHeading1>{data.title}</ProductHeading1>
      <ProductRating>Rating: <ProductRatingNum>{data.rating}/5</ProductRatingNum></ProductRating>
      <ProductInfo>
        <ProductImg src={data.imageUrl} alt={data.title} />
        <ProductInfoBox>
          <div>
            <ProductInfoHeading>
              <ProductHeading2>Description</ProductHeading2>
              {data.price > data.discountedPrice ? <ProductDiscountContainer><ProductDiscount>{Math.round(((data.discountedPrice - data.price) / data.price) * 100)}%</ProductDiscount></ProductDiscountContainer> : null}
            </ProductInfoHeading>

            <ProductText>{data.description}</ProductText>
          </div>
          <AddToCart>
            <ProductPrice>${data.discountedPrice}</ProductPrice>
            <BasicButton>Add to cart</BasicButton>
          </AddToCart>
        </ProductInfoBox>
      </ProductInfo>
      <div>
        <h3>Reviews</h3>
        <div>
          {data.reviews && data.reviews.length ? data.reviews.map((d) => (
            <ReviewsContainer key={d.id}>
              <h4>{d.username}</h4>
              <ProductRating>Rating: {d.rating}</ProductRating>
              <ProductText>{d.description}</ProductText>
            </ReviewsContainer>
          )) : <ProductTextItalic>Sorry, there are currently no reviews for this product</ProductTextItalic>}
        </div>
      </div>
    </ProductContainer>
  )
}

export default ProductSpecific;