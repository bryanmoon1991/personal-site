import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useColorMode, Button } from '@chakra-ui/react';
import { navHoverBg } from '../styles/navColors';

type ButtonProps = {
	innerText: string;
	link: string;
};

const NavBarButton: FunctionComponent<ButtonProps> = ({ innerText, link }) => {
	const { colorMode } = useColorMode();

	return (
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
	);
};

export default NavBarButton;
