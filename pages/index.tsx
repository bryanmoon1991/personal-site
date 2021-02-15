import Layout from '../components/Layout';
import { useColorMode, Heading, Text, Flex, Stack } from '@chakra-ui/react';
import { colorSecondary } from '../styles/pageStyles';

const IndexPage = () => {
	const { colorMode } = useColorMode();
	return (
		<Layout title="Home - Bryan Moon">
			<Stack
				as="main"
				spacing={8}
				justifyContent="center"
				alignItems="flex-start"
				m="0 auto 4rem auto"
				maxWidth="700px"
				px={2}
			>
				<Flex
					flexDirection="column"
					justifyContent="flex-start"
					alignItems="flex-start"
					maxWidth="1000px"
				>
					<Heading mt={5}>Hello! 👋</Heading>
					<Heading mb={5}>I'm Bryan Moon 🧑‍💻</Heading>
					<Text color={colorSecondary[colorMode]}>
						I am a software engineer based in Queens, NY with experience across
						the stack.
					</Text>
				</Flex>
			</Stack>
		</Layout>
	);
};

export default IndexPage;
