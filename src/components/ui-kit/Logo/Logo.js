import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const StyledContainer = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #c95555;

  .image-wrapper {
    display: flex;
    border-radius: 100%;
    background: #fff;
    box-shadow: 0 0 6px rgb(0 0 0 / 39%);
    margin-right: 10px;
  }
`


const Logo = ({ width = 90, height = 90 }) => {

  return (
    <Link href='/' passHref>
      <StyledContainer>
        <div className='image-wrapper'>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={width}
            height={height}
          /> 
        </div>
        <p>STOLLE</p>
      </StyledContainer>
    </Link>
  );
};

export default Logo;