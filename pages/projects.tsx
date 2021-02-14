import Link from 'next/link'
import Layout from '../components/Layout'

const ProjectsPage: React.FunctionComponent = () => (
  <Layout title="Projects | Next.js + TypeScript Example">
    <h1>Projects</h1>
    <p>Here are My Projects</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default ProjectsPage 
