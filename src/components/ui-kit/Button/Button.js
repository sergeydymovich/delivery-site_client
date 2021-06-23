import styled from 'styled-components';

const StyledContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Button = ({ className, children }) => {

  return (  
    <StyledContainer className={className} >
      {children}
    </StyledContainer>
    ) 
};

export default Button;