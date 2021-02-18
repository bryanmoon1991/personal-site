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
					<Flex align="center" mb={5}>
						<Box boxSize={[150, 190, 230]} mr={10}>
							<Image src="/bryan.jpg" alt="your latest hire" rounded="50%" />
						</Box>
						<Spacer />
						<Box>
							<Stack>
								<Heading>Hello.</Heading>
								<Heading>I'm Bryan Moon🧑‍💻</Heading>
							</Stack>
						</Box>
					</Flex>
					<Text color={colorSecondary[colorMode]} mb={10}>
						I am a software engineer based in Queens, NY with experience across
						the stack. I'm very curious and I love learning.
					</Text>
					<IconsComponent />
					<HStack
						alignItems="baseline"
						alignContent="space-between"
						spacing={5}
					>
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
						{/* <Button
							as="a"
							href="./bryan-moon-resume.pdf"
							download
							leftIcon={<DownloadIcon />}
							mt={20}
							colorScheme="teal"
							variant="solid"
						>
							Chess
						</Button> */}
					</HStack>
				</Flex>
			</Stack>
		</Layout>
	);
};

export default IndexPage;
