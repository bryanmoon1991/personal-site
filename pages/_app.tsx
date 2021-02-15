import React, { FunctionComponent } from 'react';
import {
	ChakraProvider,
	ColorModeProvider,
	useColorMode,
} from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import customTheme from '../styles/theme';
import { Global, css } from '@emotion/react';

const GlobalStyle: FunctionComponent = ({ children }) => {
	const { colorMode } = useColorMode();

	return (
		<>
			<Global
				styles={css`
					::selection {
						background-color: #90cdf4;
						color: #fefefe;
					}
					::-moz-selection {
						background: #ffb7b7;
						color: #fefefe;
					}
					html {
						min-width: 356px;
						scroll-behavior: smooth;
					}
					#__next {
						display: flex;
						flex-direction: column;
						min-height: 100vh;
						background: ${colorMode === 'light' ? 'white' : '#171717'};
					}
				`}
			/>
			{children}
		</>
	);
};

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCSS theme={customTheme}>
			<ColorModeProvider
				options={{
					initialColorMode: 'light',
					useSystemColorMode: true,
				}}
			>
				<GlobalStyle>
					<Component {...pageProps} />
				</GlobalStyle>
			</ColorModeProvider>
		</ChakraProvider>
	);
}

export default MyApp;
