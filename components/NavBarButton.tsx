import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useColorMode, Button, Box } from '@chakra-ui/react';
import { navHoverBg } from '../styles/navColors';

type ButtonProps = {
	innerText: string;
	link: string;
};

const NavBarButton: FunctionComponent<ButtonProps> = ({ innerText, link }) => {
	const { colorMode } = useColorMode();

	return (
		<Box>
			<Link href={link} passHref>
				<Button
					as="a"
					variant="ghost"
					p={[1, 2, 4]}
					_hover={{ backgroundColor: navHoverBg[colorMode] }}
				>
					{innerText}
				</Button>
			</Link>
		</Box>
	);
};

export default NavBarButton;
