import Logo from 'components/ui-kit/Logo/Logo';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: #ffe7c6;

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 34px 0;
  }

  .info {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .copyright {
    color: #1E1C22;
    font-size: 12px;
    line-height: 1.4;
    margin-bottom: 5px;
  }

  .link {
    font-size: 12px;
    line-height: 1.4;
    color: #817E71;
    text-decoration: underline;
  }
`

 const Footer = ({ className }) => {
  return (
        <StyledContainer className={className}>
          <footer className={`footer wrapper`}>
            <div className='info'>
              <p className='copyright'>
                © Copyright 2021 «Pizza Delivery»<br/>Все права защищены.
              </p>
              <a className='link' href="https://github.com/andreiyasinski" target="blank">
                Disagn by Andrei Yasinski
              </a>
              <a className='link' href="https://github.com/sergeydymovich" target="blank">
              Developed by Sergey Dymovich
              </a>
            </div>
            <Logo width={70} height={70} />
          </footer>   
        </StyledContainer>
  )
}

export default Footer;