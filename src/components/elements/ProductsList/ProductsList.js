import React, { useEffect } from "react";
import ProductsListItem from "components/elements/ProductsListItem/ProductsListItem";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "reducers/productsSlice";
import styled from 'styled-components';

const StyledContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

 const ProductsList = () => {
  const products = useSelector(state => state.products.productsArr);
  const activeCategory = useSelector(state => state.categories.activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  },[activeCategory, dispatch])

  return (
        <StyledContainer className='wrapper'>
          {products.map(product => (
            <ProductsListItem key={product._id} product={product} />
          ))}      
        </StyledContainer>
  )
}

export default ProductsList;