'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import { SaasProvider } from '@saas-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <SaasProvider>
          {children}
        </SaasProvider>
      </ChakraProvider>
    </CacheProvider>
  )
} 