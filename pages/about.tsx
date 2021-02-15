import Link from 'next/link';
import Layout from '../components/Layout';
import Image from 'next/image';
const AboutPage: React.FunctionComponent = () => (
	<Layout title="About Me">
		<h1>About</h1>
		<p>This is the about page</p>
		<p>
			<Image
				className="profile-pic"
				src="/bryan.jpg"
				layout="intrinsic"
				alt="your latest hire"
				width={150}
				height={150}
			/>
			<Link href="/">
				<a>Go home</a>
			</Link>
		</p>
	</Layout>
);

export default AboutPage;
