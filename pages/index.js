import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        HOME?
        <Link href="/blog">
          <a>HELLO</a>
        </Link>
      </main>

      <footer>
      </footer>
    </div>
  )
}
