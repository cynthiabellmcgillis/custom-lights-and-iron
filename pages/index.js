import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ImageGrid from './components/ImageGrid.js'

export default function Home() {

  const marginBottom = "128";
  return (
    <div className={styles.container}>
      <Head>


        <title>Custom Lights & Iron </title>
        <meta name="description" content="Handforged in San Diego, CA" />

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Custom Lights & Iron
        </h1>
        <p><b>Exceptional ironwork for discriminating lifestyles.</b></p>
        <ImageGrid />


      </main>
      <footer className={styles.footer}>
        <center>
          paul@customlightsandiron.com / 858-699-8805
        <br />Licensed in CA #667993 & NV #43994
      </center>

      </footer>
    </div>
  )
}
