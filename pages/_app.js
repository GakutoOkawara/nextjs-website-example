import Link from "next/link"
import "../styles/global.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <div>
        <header>
          <h1>My Website</h1>
        </header>

        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <main>
          <Component {...pageProps} />
        </main>

        <footer>
          <div>
            Powered by <a href="https://nextjs.org/">Next.js</a>
          </div>
        </footer>
      </div>
    </div>
    
  )
}

export default MyApp