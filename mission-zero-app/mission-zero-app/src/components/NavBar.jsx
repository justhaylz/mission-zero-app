import Logo from '../assets/malogo.png';
import styles from '../components/NavBar.module.css';

const NavBar = () => {
  return (
    <nav>
        <div className="topnav" id="myTopnav">
          <a className={styles.navLogo}><img src={Logo} alt="logo" /></a>
          <a className={styles.navLink} href="#">Services</a>
          <a className={styles.navLink} href="#">Training</a>
          <a className={styles.navLink} href="#">Events</a>
          <a className={styles.navLink} href="#">About</a>
          <button className={styles.navBtn}>Become a Member</button>
        </div>
    </nav>
  );
};

export default NavBar;


