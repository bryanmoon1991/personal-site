import React, { FunctionComponent, ReactNode } from 'react';
import { Flex, useColorMode } from '@chakra-ui/react';
import Head from 'next/head';
import NavBar from './NavBar';
import { color, bgColor } from '../styles/navColors';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout: FunctionComponent<Props> = ({ children, title }) => {
	const { colorMode } = useColorMode();

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<header>
				<NavBar />
			</header>
			<Flex
				as="main"
				justifyContent="center"
				flexDirection="column"
				bg={bgColor[colorMode]}
				color={color[colorMode]}
				px={[0, 4, 4]}
				mt={[4, 8, 8]}
			>
				{children}
			</Flex>
			<footer>
				<hr />
				<span>I'm here to stay (Footer)</span>
			</footer>
		</div>
	);
};

export default Layout;
