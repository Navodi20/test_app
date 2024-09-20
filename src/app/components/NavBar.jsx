// components/Navbar.js
import Link from 'next/link';
import styles from '../components/NavBar.module.css'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/About">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Services">Services</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/Menu">Menu</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/ContactUs">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
