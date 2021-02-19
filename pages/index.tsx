import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import { colorSecondary } from '../styles/pageStyles';
import {
	useColorMode,
	Heading,
	Text,
	Flex,
	Spacer,
	Stack,
	Box,
	Image,
	Button,
	HStack,
} from '@chakra-ui/react';
import { EmailIcon, DownloadIcon } from '@chakra-ui/icons';

import { IconsComponent } from '../components/IconsComponent';

const IndexPage: FunctionComponent = () => {
	const { colorMode } = useColorMode();

	return (
		<Layout title="Home - Bryan Moon">
			<Stack
				as="main"
				spacing={8}
				justifyContent="center"
				alignItems="flex-start"
				m="2rem auto 4rem auto"
				maxWidth="600px"
				px={2}
			>
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					maxWidth="1000px"
				>
					<Heading>Hello.</Heading>
					<Heading mb={5}>I'm Bryan Moon 🧑‍💻</Heading>
					<Text color={colorSecondary[colorMode]} mb={10}>
						I am a software engineer based in Queens, NY with experience across
						the stack.
					</Text>
					<IconsComponent />
					<Flex alignItems="baseline" alignContent="space-around">
						<Button
							as="a"
							href="mailto: bryanmoon1991@gmail.com"
							leftIcon={<EmailIcon />}
							mt={20}
							colorScheme="teal"
							variant="solid"
						>
							Email Me!
						</Button>
						<Spacer />
						<Button
							as="a"
							href="./bryan-moon-resume.pdf"
							download
							leftIcon={<DownloadIcon />}
							mt={20}
							colorScheme="teal"
							variant="solid"
						>
							Resume
						</Button>
					</Flex>
				</Flex>
			</Stack>
		</Layout>
	);
};

export default IndexPage;
