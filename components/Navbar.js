import styles from "./Navbar.module.css";

const Navbar = () => (
    <div className={styles.wrapper}>
        <a className={styles.navLink}>Projects</a>
        <a className={styles.navLink}>Resume</a>
        <a className={styles.navBigLink}>Contact me</a>
    </div>
);

export default Navbar;