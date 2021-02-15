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
} from '@chakra-ui/react';

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
						the stack.
					</Text>
					<IconsComponent />
				</Flex>
			</Stack>
		</Layout>
	);
};

export default IndexPage;
