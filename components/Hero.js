import styles from "./Hero.module.css";
import Image from "next/image";
import Navbar from './Navbar';

const Hero = () => (
  <main className={styles.wrapper}>
        <Navbar />
  </main>
);

export default Hero;
