import {
	VStack,
	HStack,
	Box,
	List,
	ListIcon,
	ListItem,
	Text,
} from '@chakra-ui/react';
import {
	CheckCircleIcon,
	SettingsIcon,
	WarningTwoIcon,
} from '@chakra-ui/icons';
import { ProjectCard } from '../components/ProjectCard';
import Layout from '../components/Layout';

const Portfolio: React.FunctionComponent = () => (
	<Layout title="Portfolio">
		<VStack w="100%" spacing="8rem">
			<HStack>
				<ProjectCard
					srcLink="https://www.youtube.com/embed/50RBJrqYr2c"
					title="Perfect Playlist"
					description="A web app that allows users some more control over how playlists are
					generated and enables quick discovery of new music."
					tech={[
						'Ruby on Rails',
						'React',
						'Redux',
						'Postgresql',
						'Semantic UI',
					]}
				/>
				<Box>
					<List spacing={3}>
						<ListItem as="h4">
							<ListIcon as={WarningTwoIcon} color="red.500" />
							<strong>Problems I Encountered</strong>
						</ListItem>
						<ListItem>
							<Text maxWidth="sm">
								&bull; Tokens provided to users expire every 30 minutes
							</Text>
							<Text maxWidth="sm">
								&bull; Results from API calls that exceed a certain number are
								sent with an endpoint for the 'next page' of results
							</Text>
							<Text maxWidth="sm">
								&bull; The 'artist' field for compilation albums are labeled as
								'Various Artists' along with a corresponding id
							</Text>
						</ListItem>
						<ListItem as="h4">
							<ListIcon as={CheckCircleIcon} color="green.500" />
							<strong>My Solutions</strong>
						</ListItem>
						<ListItem>
							<Text maxWidth="sm">
								&bull; I built a function that was called in the catch blocks of
								my API requests so that if a call had failed, I could refresh
								the token without disturbing the user's experience.
							</Text>
							<Text maxWidth="sm">
								&bull; I set state with the initial results of the API call and
								as the first few results would render, a function that checks if
								there were more results would run asynchronously and continue to
								update the piece of state that held its preceding data.
							</Text>
							<Text maxWidth="sm">
								&bull; Compilations were one of my main edgecases I had to test
								against. For these items, I had to scan each track and extract
								the id's of each artist that appeared on the album. Using these
								ids I was able to create a component that accurately displayed
								the artists that appear on the item.
							</Text>
						</ListItem>
					</List>
				</Box>
			</HStack>
			<ProjectCard
				srcLink="https://www.youtube.com/embed/C7_uNyuBLs8"
				title="Haiku Twitter"
				description="Twitter clone except users are only allowed to tweet haikus"
				tech={['Ruby on Rails', 'React', 'Postgresql']}
			/>
			<ProjectCard
				srcLink="./restroom-locator.png"
				title="NYC Public Restroom Locator"
				description="Web app for locating public restrooms in NYC. Seeded with NYC open data API, users are able to filter results by borough, neighborhood, or geolocation"
				tech={['Ruby on Rails', 'Vanilla JS', 'CSS']}
			/>
		</VStack>
	</Layout>
);

export default Portfolio;
