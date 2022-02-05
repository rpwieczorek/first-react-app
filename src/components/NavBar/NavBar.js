import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div>
          <span className={styles.icon + ' fa fa-bars'}></span>
        </div>
        <div className={styles.links}>
          <ul>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;