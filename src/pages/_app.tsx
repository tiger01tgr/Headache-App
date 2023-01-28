import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../layouts/Layout'
import UserProvider from '@/components/context/UserProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <UserProvider>
          <Component {...pageProps} />
        </UserProvider>
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
