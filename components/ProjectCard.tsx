import React from 'react';
import { Box, AspectRatio, Badge } from '@chakra-ui/react';

interface CardProps {
	srcLink: string;
	title: string;
	description: string;
	tech: Array<string>;
}

export const ProjectCard = ({
	srcLink,
	title,
	description,
	tech,
}: CardProps) => {
	const badgeMap = tech.map((t) => (
		<Badge borderRadius="full" px="2" colorScheme="blue">
			{t}
		</Badge>
	));

	return (
		<>
			{' '}
			<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
				<AspectRatio>
					<iframe src={srcLink} />
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
				<Box as="p" p="6" fontSize="sm">
					{description}
				</Box>
				<Box p="6">
					<Box d="" alignItems="baseline">
						{badgeMap}
					</Box>
				</Box>
			</Box>
		</>
	);
};
