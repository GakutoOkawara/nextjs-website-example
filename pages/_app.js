import Link from "next/link"
import "../styles/global.css"
import styles from "../styles/App.module.css"

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>My Website</h1>
        </header>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        <main className={styles.main}>
          <Component {...pageProps} />
        </main>

        <footer className={styles.footer}>
          <div className={styles.inner}>
            Powered by <a href="https://nextjs.org/">Next.js</a>
          </div>
        </footer>
      </div>
    </div>
    
  )
}

export default MyApp