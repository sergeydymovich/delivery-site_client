import styled from 'styled-components';

const StyledContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #ff4756, #fe8b77);
  border: 1px solid lightgrey;
  color: white;
  font-weight: 700;
  cursor: pointer;

  &:hover {
  background: linear-gradient(45deg, #ff4756, #fec477);
}

  &.button__theme-primary {
    border-radius: 24px;
  }

  &.button__theme-basket {
    border-radius: 5px;
    padding: 17px 17px;
    font-size: 14px;
    font-weight: 400;
  }
`

const Button = ({ theme, className, children }) => {

  return (  
    <StyledContainer className={`button__theme-${theme} ${className}`} >
      {children}
    </StyledContainer>
    ) 
};

export default Button;