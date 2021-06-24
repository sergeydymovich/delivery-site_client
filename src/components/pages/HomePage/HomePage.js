import CategoriesList from 'components/elements/CategoriesList/CategoriesList';
import styled from 'styled-components';

const StyledContainer = styled.main`
  
`

 const HomeContent = () => {
  return (
        <StyledContainer>
          <CategoriesList />
        </StyledContainer>
  )
}

export default HomeContent;