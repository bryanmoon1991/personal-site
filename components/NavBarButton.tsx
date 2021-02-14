import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { useColorMode, Button, Box } from '@chakra-ui/react';

type ButtonProps = {
	innerText: string;
	link: string;
};

const NavBarButton: FunctionComponent<ButtonProps> = ({ innerText, link }) => {
	const { colorMode } = useColorMode();

	const navHoverBg = {
		light: 'gray.600',
		dark: 'gray.300',
	};

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
