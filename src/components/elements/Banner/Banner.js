import styled from 'styled-components';

const StyledContainer = styled.div`
  min-height: 220px;
  background: 
    linear-gradient(rgba(255, 204, 141, 0.2), rgba(113, 52, 0, 0.2)),
    url('/images/banner.jpg') center no-repeat;
  background-size: cover;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  .title {
    font-size: 36px;
  }

  .sub-title {
    font-size: 32px;
  }
`

 const Banner = ({ className }) => {
  return (
        <StyledContainer className={className}>
          <h2 className='title'>#ОставайтесьДома</h2>
          <h3 className='sub-title'>Мы доставим!</h3>
        </StyledContainer>
  )
}

export default Banner;