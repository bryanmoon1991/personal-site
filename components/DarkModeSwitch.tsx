import React, { FunctionComponent } from 'react';
import { useColorMode, IconButton, Tooltip } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { iconColor } from '../styles/navColors';

const DarkModeSwitch: FunctionComponent = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	return (
		<Tooltip
			hasArrow
			label="Toggle Dark/Light Mode"
			bg="gray.300"
			color="black"
			closeOnClick={true}
		>
			<IconButton
				aria-label="Toggle dark mode"
				icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
				onClick={toggleColorMode}
				color={iconColor[colorMode]}
			/>
		</Tooltip>
	);
};

export default DarkModeSwitch;
