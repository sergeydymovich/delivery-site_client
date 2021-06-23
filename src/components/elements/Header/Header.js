import Link from 'next/link';
import styled from 'styled-components';
import Logo from 'components/ui-kit/Logo/Logo';
import Button from 'components/ui-kit/Button/Button';
import PhoneIcon from 'public/svg/phone.svg';

const StyledContainer = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: #fff;
  z-index: 10;

  .header {
    height: 90px;
    max-width: 1200px;
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 15px;
    display: flex;
    align-items: center;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .list {
    display: flex;
    align-items: center;
  }

  .list-item-text {
    padding: 15px 20px;
  }

  .phone-wrapper {
    display: flex;
    align-items: center;
    color: #817E71;

  }

  .phone-icon {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  .phone {
    font-size: 30px; 
  }

  .basket-button {
    background-color: red;
  }

`

export default function Header() {
  return (
      <StyledContainer>
        <div className='header'>
          <Logo />
          <nav className='navigation'>
            <ul className='list'>
              <li>
                <Link href='/' passHref>
                  <a>
                    <p className='list-item-text'>МЕНЮ</p>
                  </a>         
                </Link>
              </li>
              <li>
                <Link href='/' passHref>
                  <a>
                    <p className='list-item-text'>АКЦИИ</p>
                  </a> 
                </Link>
              </li>
              <li>
                <Link href='/' passHref>
                  <a>
                    <p className='list-item-text'>О НАС</p>
                  </a> 
                </Link>
              </li>
              <li>
                <Link href='/' passHref>
                  <a>
                    <p className='list-item-text'>ДОСТАВКА</p>
                  </a> 
                </Link>
              </li>
            </ul>
          </nav>
          <div className='phone-wrapper'>
            <PhoneIcon className='phone-icon' />
            <p className='phone'>7777</p>
          </div>
          <Button className='basket-button'>КНОПКА!</Button>
        </div>       
      </StyledContainer>  
  )
}