import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({

  fonts: {
    body: 'poppins'
  },
  styles: {
    global: {
        body: {
          bg: 'gray.900',
          color: 'gray.50',
        }
    }
  }
})