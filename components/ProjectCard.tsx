import React from 'react';
import {
	Box,
	AspectRatio,
	Badge,
	Link,
	Flex,
	Spacer,
	Tooltip,
	Image,
	Heading,
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
		<Badge borderRadius="full" mx="1" px="2" colorScheme="blue" key={t}>
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
				{/* <Box p="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
					{title}
				</Box> */}
				<Heading>{title}</Heading>
				{srcLink.charAt(0) === '.' ? (
					<Image src={srcLink} />
				) : (
					<AspectRatio>
						<Box as="iframe" src={srcLink} />
					</AspectRatio>
				)}

				<Box as="p" m="6">
					{description}
				</Box>
				<Box ml="6" mr="6">
					<Box alignItems="baseline">{badgeMap}</Box>
				</Box>
				<Flex p="6">
					<Spacer />
					<Box pl="1" pr="1">
						<Link href={gitLink} target="_blank">
							<strong>Github</strong>
						</Link>
					</Box>

					{externalLink ? (
						<>
							{'|'}
							<Box pl="1" pr="1">
								<Link href={externalLink} target="_blank">
									<strong>Deployed Version</strong>
								</Link>
							</Box>
						</>
					) : undefined}
				</Flex>
			</Box>
		</>
	);
};
