import { Box, AspectRatio, Badge } from '@chakra-ui/react';
import Layout from '../components/Layout';

const Portfolio: React.FunctionComponent = () => (
	<Layout title="Portfolio">
		{' '}
		<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
			<AspectRatio>
				<iframe src="https://www.youtube.com/embed/50RBJrqYr2c"></iframe>
			</AspectRatio>

			<Box p="6">
				<Box d="flex" alignItems="baseline">
					<Badge borderRadius="full" px="2" colorScheme="teal">
						Ruby on Rails
					</Badge>
					<Badge borderRadius="full" px="2" colorScheme="teal">
						React
					</Badge>
					<Badge borderRadius="full" px="2" colorScheme="teal">
						Redux
					</Badge>
					<Badge borderRadius="full" px="2" colorScheme="teal">
						Semantic UI
					</Badge>
					<Box
						color="gray.500"
						fontWeight="semibold"
						letterSpacing="wide"
						fontSize="xs"
						textTransform="uppercase"
						ml="2"
					>
						1 beds &bull; 1 baths
					</Box>
				</Box>

				<Box
					mt="1"
					fontWeight="semibold"
					as="h4"
					lineHeight="tight"
					isTruncated
				>
					Title
				</Box>

				<Box>
					Price
					<Box as="span" color="gray.600" fontSize="sm">
						/ wk
					</Box>
				</Box>
			</Box>
		</Box>
	</Layout>
);

export default Portfolio;
