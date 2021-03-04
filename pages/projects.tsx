import {
	Modal,
	ModalContent,
	ModalBody,
	ModalFooter,
	ModalCloseButton,
	ModalOverlay,
	ModalHeader,
	Button,
	Image,
	VStack,
	Flex,
	Box,
	List,
	ListIcon,
	ListItem,
	Text,
	Heading,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { CheckCircleIcon, WarningTwoIcon, InfoIcon } from '@chakra-ui/icons';
import { ProjectCard } from '../components/ProjectCard';
import Layout from '../components/Layout';

const Portfolio: React.FunctionComponent = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [whichModal, setWhichModal] = useState(1);
	const handleModal = (id: number) => {
		setWhichModal(id);
		onOpen();
	};
	return (
		<Layout title="Projects">
			<Flex justifyContent="center">
				<Heading>Past Projects</Heading>
			</Flex>
			<VStack w="100%" spacing="8rem">
				<Flex
					direction={['column', 'column', 'row', 'row']}
					justifyContent="center"
				>
					<ProjectCard
						srcLink="https://www.youtube.com/embed/50RBJrqYr2c?rel=0;controls=0;showinfo=0"
						title="Perfect Playlist"
						description="A web app that allows users some more control over how playlists are
					generated and enables quick discovery of new music. Note, this app is currently not mobile friendly and will only work with premium Spotify accounts, improvements will be made to it over time!."
						tech={[
							'Ruby on Rails',
							'React',
							'Redux',
							'Postgresql',
							'Semantic UI',
							'Spotify API',
						]}
						gitLink="https://github.com/bryanmoon1991/playlister-frontend"
						externalLink="https://playlister-frontend.herokuapp.com/"
					/>
					<Box justifySelf="center" p="3" m="8">
						<List spacing={3}>
							<ListItem as="h2">
								<ListIcon as={WarningTwoIcon} color="red.500" />
								<strong>Challenges Encountered</strong>
							</ListItem>
							<ListItem>
								<Text maxWidth="sm">
									&bull; Tokens provided to users expire every 30 minutes
								</Text>
								<br />
								<Text maxWidth="sm">
									&bull; Results from API calls that exceed a certain number are
									sent with an endpoint for the 'next page' of results
								</Text>
								<br />
								<Text maxWidth="sm">
									&bull; The 'artist' field for compilation albums are labeled
									as 'Various Artists' along with a corresponding id
								</Text>
							</ListItem>
							<ListItem as="h2">
								<ListIcon as={CheckCircleIcon} color="green.500" />
								<strong>Solutions</strong>
							</ListItem>
							<ListItem>
								<Text maxWidth="sm">
									&bull; I built a function that was called in the catch blocks
									of my API requests so that if a call had failed, I could
									refresh the token without disturbing the user's experience.
								</Text>
								<Text maxWidth="sm">
									&bull; I set state with the initial results of the API call
									and as the first few results would render, a function that
									checks if there were more results would run asynchronously and
									continue to update the piece of state that held its preceding
									data.
								</Text>
								<Text maxWidth="sm">
									&bull; Compilations were one of my main edgecases I had to
									test against. For these items, I had to scan each track and
									extract the id's of each artist that appeared on the album.
									Using these ids I was able to create a component that
									accurately displayed the artists that appear on the item.
								</Text>
							</ListItem>
						</List>
					</Box>
				</Flex>

				<Flex
					direction={['column', 'column', 'row', 'row']}
					justifyContent="center"
				>
					<ProjectCard
						srcLink="https://www.youtube.com/embed/C7_uNyuBLs8??rel=0;controls=0;showinfo=0"
						title="Haiku Twitter"
						description="Twitter clone except users are only allowed to tweet haikus"
						tech={['Ruby on Rails', 'React', 'Postgresql']}
						gitLink="https://github.com/bryanmoon1991/haiku-twitter-frontend"
					/>
					<Box justifySelf="center" p="3" m="8">
						<List spacing={3}>
							<ListItem as="h2">
								<ListIcon as={WarningTwoIcon} color="red.500" />
								<strong>Challenges Encountered</strong>
							</ListItem>
							<ListItem>
								<Text maxWidth="sm">
									&bull; Efficiently serializing the data that gets sent to the
									frontend
								</Text>
								<Text maxWidth="sm">
									&bull; Creating an infinite scroll feature without paginated
									responses from the backend API
								</Text>
							</ListItem>
							<ListItem as="h2">
								<ListIcon as={CheckCircleIcon} color="green.500" />
								<strong>Solutions</strong>
							</ListItem>
							<ListItem>
								<Text maxWidth="sm">
									&bull; It was important to create two different serializers
									for the User model so that I could either send all of a users
									metadata, or only the necessary metadata. The frontend would
									need all of the metadata of only one user at a time while the
									app was focused on that particular user's profile page. While
									my app was small and only seeded with a couple hundred users,
									I realized that if I was working with a large number of users
									I would have to be mindful of how the data was being
									serialized and which pieces metadata was necessary for a view
									to render.
								</Text>
								<Text maxWidth="sm">
									&bull; While creating an infinite scroll feature was not
									necessary for the app to work, I wanted to include it as a
									feature to emulate the experience of using Twitter. An
									infinite scroll would usually require paginated responses from
									an API but I was able to{' '}
									<a
										onClick={() => handleModal(1)}
										style={{ cursor: 'pointer', textDecoration: 'underline' }}
									>
										mimic the effect
									</a>{' '}
									by setting state with the next 10 results once the user
									reached the end of the page. This of course defeats the
									purpose being that an infinite scroll is supposed to help
									manage the amount of data that is rendered, but it was fun to
									come up with a way to mimic this effect.
								</Text>
							</ListItem>
						</List>
					</Box>
				</Flex>
				<Flex
					direction={['column', 'column', 'row', 'row']}
					justifyContent="center"
				>
					<ProjectCard
						srcLink="./restroom-locator.png"
						title="NYC Public Restroom Locator"
						description="Web app for locating public restrooms in NYC. Seeded with NYC open data API, users are able to filter results by borough, neighborhood, or geolocation"
						tech={['Ruby on Rails', 'Vanilla JS', 'CSS']}
						gitLink="https://github.com/bryanmoon1991/nyc-toilet-locator-frontend"
					/>
					<Box justifySelf="center" p="3" m="8">
						<List spacing={3}>
							<ListItem as="h2">
								<ListIcon as={InfoIcon} color="green.500" />
								<strong>Things I Learned From This Project</strong>
							</ListItem>
							<ListItem>
								<Text maxWidth="sm">
									&bull; Frameworks like React are insanely useful when it comes
									to building user interfaces like this one. But without the
									help of a library, solutions demand some creativity and a
									deeper understanding of the logic behind seemingly simple
									functionality. For instance, just making{' '}
									<a
										onClick={() => handleModal(2)}
										style={{ cursor: 'pointer', textDecoration: 'underline' }}
									>
										controls
									</a>{' '}
									that allow a user to navigate through their results becomes
									extremely tedius without the help of state management. This
									was solved in my app with a few variables that held boolean
									and number values, which helped me track the users
									interactions in the interface. I also developed an
									appreciation for a 'functional programming' design pattern in
									the way helped me organize my logic and keep track of the flow
									of data. Writing simple{' '}
									<a
										onClick={() => handleModal(3)}
										style={{ cursor: 'pointer', textDecoration: 'underline' }}
									>
										helper functions
									</a>{' '}
									to help me execute larger ones is very satisfying. This
									project never presented any complex issues but definitely
									taught me the importance of understanding javascript at it's
									core and being able to programmatically manipulate the DOM.
								</Text>
							</ListItem>
						</List>
					</Box>
				</Flex>
			</VStack>
			<Modal isOpen={isOpen} onClose={onClose} size="4xl">
				<ModalOverlay />
				<ModalContent>
					{whichModal % 2 ? (
						whichModal === 1 ? (
							<ModalHeader>Fake Infinite Scroll</ModalHeader>
						) : (
							<ModalHeader>Helper Functions</ModalHeader>
						)
					) : (
						<ModalHeader>Pagination Controls</ModalHeader>
					)}
					<ModalCloseButton />
					<ModalBody>
						<Box boxSize="full">
							{whichModal % 2 ? (
								whichModal === 1 ? (
									<Image src="./FakeInfiniteScroll.png" alt="example code" />
								) : (
									<Image src="./HelperFunctions.png" alt="example code" />
								)
							) : (
								<Image src="./PageControls.png" alt="example code" />
							)}
						</Box>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Layout>
	);
};

export default Portfolio;
