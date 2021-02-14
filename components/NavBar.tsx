import React, { FunctionComponent } from 'react';
import DarkModeSwitch from '../components/DarkModeSwitch';
import NavBarButton from '../components/NavBarButton';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const NavBar: FunctionComponent = () => {
	const StickyNav = styled(Flex)`
		position: sticky;
		z-index: 10;
		top: 0;
		backdrop-filter: saturate(100%) blur(20px);
		transition: height 0.5s, line-height 0.5s;
	`;

	return (
		<StickyNav>
			<NavBarButton link="/" innerText="Home" />
			<NavBarButton link="/about" innerText="About" />
			<NavBarButton link="/projects" innerText="Projects" />
			<NavBarButton link="https://medium.com/@bryanmoon1991" innerText="Blog" />
			<DarkModeSwitch />
		</StickyNav>
	);
};

export default NavBar;
