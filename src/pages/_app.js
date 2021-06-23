import Layout from 'components/elements/Layout/Layout';
import 'globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  ) 
}

export default MyApp
