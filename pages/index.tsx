import React, { FunctionComponent } from 'react';
import Layout from '../components/Layout';
import {
	useColorMode,
	Heading,
	Text,
	Flex,
	Spacer,
	Wrap,
	WrapItem,
	Stack,
	Box,
	Image,
	Tooltip,
} from '@chakra-ui/react';
import { colorSecondary } from '../styles/pageStyles';
import styled from '@emotion/styled';
import { StyledIcon } from '@styled-icons/styled-icon';
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
} from '@styled-icons/simple-icons';
const IndexPage: FunctionComponent = () => {
	const { colorMode } = useColorMode();

	interface Props {
		VimIcon: StyledIcon;
		CssIcon: StyledIcon;
		RubyonrailsIcon: StyledIcon;
		RubyIcon: StyledIcon;
		JavascriptIcon: StyledIcon;
		TypescriptIcon: StyledIcon;
		ReactLogoIcon: StyledIcon;
		SemanticuireactIcon: StyledIcon;
		ReduxIcon: StyledIcon;
		GitIcon: StyledIcon;
		SqliteIcon: StyledIcon;
		PostgresqlIcon: StyledIcon;
		FigmaIcon: StyledIcon;
		CanvaIcon: StyledIcon;
		PostmanIcon: StyledIcon;
		Html5Icon: StyledIcon;
	}

	const VimIcon = styled(Vim)`
		color: white;
	`;

	const CssIcon = styled(Css3)`
		color: white;
	`;
	const RubyonrailsIcon = styled(Rubyonrails)`
		color: white;
	`;
	const RubyIcon = styled(Ruby)`
		color: white;
	`;
	const JavascriptIcon = styled(Javascript)`
		color: white;
	`;
	const TypescriptIcon = styled(Typescript)`
		color: white;
	`;
	const ReactLogoIcon = styled(ReactLogo)`
		color: white;
	`;
	const SemanticuireactIcon = styled(Semanticuireact)`
		color: white;
	`;
	const ReduxIcon = styled(Redux)`
		color: white;
	`;
	const GitIcon = styled(Git)`
		color: white;
	`;
	const SqliteIcon = styled(Sqlite)`
		color: white;
	`;
	const PostgresqlIcon = styled(Postgresql)`
		color: white;
	`;
	const FigmaIcon = styled(Figma)`
		color: white;
	`;
	const CanvaIcon = styled(Canva)`
		color: white;
	`;
	const PostmanIcon = styled(Postman)`
		color: white;
	`;
	const Html5Icon = styled(Html5)`
		color: white;
	`;

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
					<Wrap spacing="20px" gridColumn="5">
						<WrapItem>
							<Tooltip
								hasArrow
								openDelay={1000}
								label="Ruby"
								bg="gray.300"
								color="black"
							>
								<RubyIcon size="30" />
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
								<RubyonrailsIcon size="30" />
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
								<Html5Icon size="30" />
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
								<CssIcon size="30" />
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
								<SemanticuireactIcon size="30" />
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
								<JavascriptIcon size="30" />
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
								<TypescriptIcon size="30" />
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
								<ReactLogoIcon size="30" />
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
								<ReduxIcon size="30" />
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
								<GitIcon size="30" />
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
								<SqliteIcon size="30" />
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
								<PostgresqlIcon size="30" />
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
								<VimIcon size="30" />
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
								<FigmaIcon size="30" />
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
								<CanvaIcon size="30" />
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
								<PostmanIcon size="30" />
							</Tooltip>
						</WrapItem>
					</Wrap>
				</Flex>
			</Stack>
		</Layout>
	);
};

export default IndexPage;
