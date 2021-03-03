import React from 'react';
import { Wrap, WrapItem, Tooltip } from '@chakra-ui/react';
import {
	Vim,
	Css3,
	Rubyonrails,
	Ruby,
	Javascript,
	Typescript,
	ReactLogo,
	Semanticuireact,
	Redux,
	Git,
	Sqlite,
	Postgresql,
	Figma,
	Canva,
	Postman,
	Html5,
	Python,
	Flask,
} from '@styled-icons/simple-icons';
import { useColorMode } from '@chakra-ui/react';

export const IconsComponent = () => {
	const { colorMode } = useColorMode();

	return (
		<Wrap spacing="20px" gridColumn="5">
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Ruby"
					bg="gray.300"
					color="black"
				>
					<Ruby size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Rails"
					bg="gray.300"
					color="black"
				>
					<Rubyonrails
						size="30"
						fill={colorMode === 'dark' ? 'white' : 'black'}
					/>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Python"
					bg="gray.300"
					color="black"
				>
					<Python size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Flask"
					bg="gray.300"
					color="black"
				>
					<Flask size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="HTML5"
					bg="gray.300"
					color="black"
				>
					<Html5 size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="CSS"
					bg="gray.300"
					color="black"
				>
					<Css3 size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Semantic UI React"
					bg="gray.300"
					color="black"
				>
					<Semanticuireact
						size="30"
						fill={colorMode === 'dark' ? 'white' : 'black'}
					/>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Javascript/ES6"
					bg="gray.300"
					color="black"
				>
					<Javascript
						size="30"
						fill={colorMode === 'dark' ? 'white' : 'black'}
					/>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Typescript"
					bg="gray.300"
					color="black"
				>
					<Typescript
						size="30"
						fill={colorMode === 'dark' ? 'white' : 'black'}
					/>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="React"
					bg="gray.300"
					color="black"
				>
					<ReactLogo
						size="30"
						fill={colorMode === 'dark' ? 'white' : 'black'}
					/>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Redux"
					bg="gray.300"
					color="black"
				>
					<Redux size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Git/Github"
					bg="gray.300"
					color="black"
				>
					<Git size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Sql/Sqlite"
					bg="gray.300"
					color="black"
				>
					<Sqlite size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Postgresql"
					bg="gray.300"
					color="black"
				>
					<Postgresql
						size="30"
						fill={colorMode === 'dark' ? 'white' : 'black'}
					/>
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Vim"
					bg="gray.300"
					color="black"
				>
					<Vim size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Figma"
					bg="gray.300"
					color="black"
				>
					<Figma size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Canva"
					bg="gray.300"
					color="black"
				>
					<Canva size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
			<WrapItem>
				<Tooltip
					hasArrow
					openDelay={1000}
					label="Postman"
					bg="gray.300"
					color="black"
				>
					<Postman size="30" fill={colorMode === 'dark' ? 'white' : 'black'} />
				</Tooltip>
			</WrapItem>
		</Wrap>
	);
};
