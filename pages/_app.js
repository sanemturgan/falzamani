import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "swiper/swiper-bundle.min.css";
import { ChakraProvider, Input } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
