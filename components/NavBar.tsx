import Link from 'next/link'

const NavBar:React.FunctionComponent = () => (
    <nav>
        <Link href="/">
            <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
            <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/projects">
            <a>Projects</a>
        </Link>{' '}
        |{' '}
        <Link href="https://medium.com/@bryanmoon1991">
            <a>Blog</a>
        </Link>
    </nav>
)

export default NavBar