import Head from 'next/head'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Script from 'next/script'


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.5.1/build/styles/rainbow.min.css" />
        <title>Kishan Portfolio</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Navbar />
      <Main />
      <Contact />
    </div>
  )
}