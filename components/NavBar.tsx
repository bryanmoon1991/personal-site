import React, { FunctionComponent } from 'react';
import DarkModeSwitch from '../components/DarkModeSwitch';
import NavBarButton from '../components/NavBarButton';
import { Flex, Box, Tooltip, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { bgColor } from '../styles/navColors';

const NavBar: FunctionComponent = () => {
	const { colorMode } = useColorMode();

	const StickyNav = styled(Flex)`
		position: sticky;
		z-index: 4;
		top: 0;
		backdrop-filter: saturate(100%) blur(20px);
		transition: height 0.5s, line-height 0.5s;
	`;

	return (
		<>
			<StickyNav
				flexDirection="row"
				justifyContent="space-between"
				alignItems="center"
				maxWidth="800px"
				minWidth="350px"
				width="100%"
				bg={bgColor[colorMode]}
				as="nav"
				px={[2, 6, 4]}
				py={2}
				mt={8}
				mb={[0, 0, 8]}
				mx="auto"
			>
				<Box>
					<NavBarButton link="/" innerText="Home" />
				</Box>
				<Box>
					<NavBarButton link="/projects" innerText="Projects" />
				</Box>
				<Box>
					<NavBarButton
						link="https://medium.com/@bryanmoon1991"
						innerText="Blog"
						external={1}
					/>
				</Box>
				<DarkModeSwitch />
			</StickyNav>
		</>
	);
};

export default NavBar;
