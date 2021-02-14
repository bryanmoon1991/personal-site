import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';

type Props = {
	children?: ReactNode;
	title?: string;
};

const Layout: FunctionComponent<Props> = ({ children, title }) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<header>
			<NavBar />
		</header>
		{children}
		<footer>
			<hr />
			<span>I'm here to stay (Footer)</span>
		</footer>
	</div>
);

export default Layout;
