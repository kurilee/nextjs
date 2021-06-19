import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ku Music - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="">Ku Music</a>
        </h1>

        <p className={styles.description}>
        Video Music Application
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h3>Info &rarr;</h3>
            <p>Introdue about Ku Music.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Download &rarr;</h3>
            <p>Get App From Google Play Store.</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Help &rarr;</h3>
            <p>Get help</p>
          </a>

          <a href="" className={styles.card}>
            <h3>Contract &rarr;</h3>
            <p>sasukelizm@gmail.com</p>
          </a>
        </div>
      </main>
    </div>
  )
}
