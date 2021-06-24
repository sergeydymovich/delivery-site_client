import React, { useEffect } from "react";
import CategoriesListItem from 'components/elements/CategoriesListItem/CategoriesListItem';
import { useDispatch, useSelector } from "react-redux";
import { getCategories, setActiveCategory } from "reducers/categoriesSlice";
import styled from 'styled-components';

const StyledContainer = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 10px; 
`

 const CategoriesList = () => {
  const categories = useSelector((state) => state.categories.categoriesArr);
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const dispatch = useDispatch();

  const handleSetActiveCategory = (categoryID) => {
    dispatch(setActiveCategory(categoryID));
  }

  useEffect(() => {
    if (!categories.length) {
      dispatch(getCategories());
    }
  }, [dispatch, categories.length]);

  return (
        <StyledContainer className='wrapper'>
          {categories.map(category => (
            <CategoriesListItem
              key={category._id}
              category={category}
              isActive={category._id === activeCategory}
              onClick={() => handleSetActiveCategory(category._id)}
            />
          ))}    
        </StyledContainer>
  )
}

export default CategoriesList;