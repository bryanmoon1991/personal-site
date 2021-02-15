import React, { FunctionComponent } from 'react';
import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { iconColor } from '../styles/navColors';

const DarkModeSwitch: FunctionComponent = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<IconButton
			aria-label="Toggle dark mode"
			icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
			onClick={toggleColorMode}
			color={iconColor[colorMode]}
		/>
	);
};

export default DarkModeSwitch;
