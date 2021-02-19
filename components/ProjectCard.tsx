import React from 'react';
import {
	Box,
	AspectRatio,
	Badge,
	Link,
	Flex,
	Spacer,
	Tooltip,
} from '@chakra-ui/react';
import { Github } from '@styled-icons/simple-icons';
import { useColorMode } from '@chakra-ui/react';
import { ExternalLinkOutline } from '@styled-icons/evaicons-outline';

interface CardProps {
	srcLink: string;
	title: string;
	description: string;
	tech: Array<string>;
	gitLink?: string;
	externalLink?: string;
}

export const ProjectCard = ({
	srcLink,
	title,
	description,
	tech,
	gitLink,
	externalLink,
}: CardProps) => {
	const { colorMode } = useColorMode();

	const badgeMap = tech.map((t) => (
		<Badge borderRadius="full" px="2" colorScheme="blue">
			{t}
		</Badge>
	));

	return (
		<>
			<Box
				w={['xs', 'sm', 'md', 'xl', '2xl']}
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				justifySelf="center"
				p="3"
				m="8"
			>
				<AspectRatio>
					<Box as="iframe" src={srcLink} />
				</AspectRatio>

				<Box
					mt="1"
					p="6"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					{title}
				</Box>
				<Box as="p" ml="6" mr="6" fontSize="sm">
					{description}
				</Box>
				<Box p="6">
					<Box alignItems="baseline">{badgeMap}</Box>
				</Box>
				<Flex p="6">
					<Spacer />
					<Box>
						<Link href={gitLink} target="_blank">
							<Tooltip hasArrow label="Github" bg="gray.300" color="black">
								<Github
									size="30"
									fill={colorMode === 'dark' ? 'white' : 'black'}
								/>
							</Tooltip>
						</Link>
					</Box>

					{externalLink ? (
						<Box>
							<Link href={externalLink} target="_blank">
								<Tooltip
									hasArrow
									label="Deployed Version"
									bg="gray.300"
									color="black"
								>
									<ExternalLinkOutline
										size="33"
										color={colorMode === 'dark' ? 'white' : 'black'}
									/>
								</Tooltip>
							</Link>
						</Box>
					) : undefined}
				</Flex>
			</Box>
		</>
	);
};
