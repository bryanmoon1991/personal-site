import { VStack } from '@chakra-ui/react';
import { ProjectCard } from '../components/ProjectCard';
import Layout from '../components/Layout';

const Portfolio: React.FunctionComponent = () => (
	<Layout title="Portfolio">
		<VStack w="100%" spacing="8rem">
			<ProjectCard
				srcLink="https://www.youtube.com/embed/50RBJrqYr2c"
				title="Perfect Playlist"
				description="A web app that allows users some more control over how playlists are
					generated and enables quick discovery of new music."
				tech={['Ruby on Rails', 'React', 'Redux', 'Postgresql', 'Semantic UI']}
			/>
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
