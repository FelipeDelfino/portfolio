import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../styles/theme'
import { Analytics } from '@vercel/analytics/react';


import "swiper/css/bundle";
import '../ProjectList/Carousel/stylesCarousel.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Analytics/>
    </ChakraProvider>

  )
}

export default MyApp
