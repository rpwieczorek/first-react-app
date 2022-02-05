import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <div className={styles.container}>
        <div>
          <span className={styles.icon + ' fa fa-bars'}></span>
        </div>
        <div className={styles.links}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/favorite">Favorite</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;