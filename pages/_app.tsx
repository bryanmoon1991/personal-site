import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import type { AppProps } from 'next/app'
import customTheme from '../styles/theme'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider resetCSS theme={customTheme}>
            <ColorModeProvider
                options={{
                    initialColorMode: "light",
                    useSystemColorMode: true,
                }}
            >
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    ) 
}

export default MyApp