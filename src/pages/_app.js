import Layout from 'components/elements/Layout/Layout';
import store from 'store';
import { Provider } from 'react-redux'
import 'globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  ) 
}

export default MyApp
