import React, { FunctionComponent } from 'react';
import DarkModeSwitch from '../components/DarkModeSwitch';
import NavBarButton from '../components/NavBarButton';
import { Flex, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';

const NavBar: FunctionComponent = ({ children }) => {
	const { colorMode } = useColorMode();

	const StickyNav = styled(Flex)`
		position: sticky;
		z-index: 10;
		top: 0;
		backdrop-filter: saturate(100%) blur(20px);
		transition: height 0.5s, line-height 0.5s;
	`;

	const bgColor = {
		light: 'white',
		dark: '#171717',
	};

	return (
		<>
			<StickyNav>
				<NavBarButton link="/" innerText="Home" />
				<NavBarButton link="/about" innerText="About" />
				<NavBarButton link="/projects" innerText="Projects" />
				<NavBarButton
					link="https://medium.com/@bryanmoon1991"
					innerText="Blog"
				/>
				<DarkModeSwitch />
			</StickyNav>
			<Flex
				as="main"
				justifyContent="center"
				flexDirection="column"
				bg={bgColor[colorMode]}
				color={bgColor[colorMode]}
				px={[0, 4, 4]}
				mt={[4, 8, 8]}
			>
				{children}
			</Flex>
		</>
	);
};

export default NavBar;
