import "../styles/globals.css";
import Layout from "./Components/Layout";
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '../node_modules/@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
