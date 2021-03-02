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
	Button,
	Box,
	Image,
} from '@chakra-ui/react';
import { EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons';

import { IconsComponent } from '../components/IconsComponent';

const IndexPage: FunctionComponent = () => {
	const { colorMode } = useColorMode();

	return (
		<Layout title="Home - Bryan Moon">
			<Stack
				spacing={8}
				justifyContent="center"
				alignItems="flex-start"
				m="2rem auto 4rem auto"
				maxWidth="600px"
				px={2}
			>
				<Flex
					flexDirection="column"
					justifyContent="center"
					alignItems="flex-start"
				>
					<Flex justifyContent="center" align="center" mb={5}>
						<Box
							boxSize={[150, 190, 230]}
							mr={10}
							borderWidth="8px"
							rounded="50%"
							borderColor="grey.100"
						>
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
						the stack.
					</Text>
					<IconsComponent />
					<Flex w="100%">
						<Button
							size="md"
							as="a"
							href="mailto: bryanmoon1991@gmail.com"
							leftIcon={<EmailIcon />}
							mt={20}
							colorScheme="messenger"
							variant="solid"
						>
							Email Me!
						</Button>
						<Spacer />
						<Button
							size="md"
							as="a"
							href="./bryan-moon-resume.pdf"
							target="_blank"
							leftIcon={<ExternalLinkIcon />}
							mt={20}
							colorScheme="messenger"
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
