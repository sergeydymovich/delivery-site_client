import Header from "components/elements/Header/Header";
import Footer from 'components/elements/Footer/Footer';
import Head from 'next/head';
import styled from 'styled-components';

const StyledContainer = styled.div`
  .layout {
    margin-top: 90px;
    min-height: calc(100vh - 90px);
    background: #fff8ef;
  }
`

export default function Layout({ children }) {
  return (
        <StyledContainer>
          <Head>
           <title>STOLLE</title>
          </Head>
          <Header />
          <div className="layout">
            {children}
          </div>
          <Footer />
        </StyledContainer>
  )
}