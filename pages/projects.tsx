import Link from 'next/link'
import Layout from '../components/Layout'

const Portfolio: React.FunctionComponent = () => (
  <Layout title='Portfolio'>
    <h1>Projects</h1>
    <p>Here are My Projects</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default Portfolio 
