import UserProvider from '@/components/context/UserProvider';
import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Layout from '../layouts/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
