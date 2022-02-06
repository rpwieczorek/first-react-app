import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const classCondition = ({ isActive }) => isActive ? styles.linkActive : '';
  
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div>
          <span className={styles.icon + ' fa fa-bars'}></span>
        </div>
        <div className={styles.links}>
          <ul>
            <li><NavLink className={classCondition} to="/">Home</NavLink></li>
            <li><NavLink className={classCondition} to="/favorite">Favorite</NavLink></li>
            <li><NavLink className={classCondition} to="/about">About</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;