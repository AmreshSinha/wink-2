import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Wink</title>
        <meta name="description" content="Nothing but a Portfolio!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* About Me Seciotn */}

      {/* Projects Section */}

      {/* Contacts Sections */}
    </>
  );
}
