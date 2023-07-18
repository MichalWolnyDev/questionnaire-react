import styles from "../../scss/sections/Navigation.module.scss";

const Navigation = () => {
  return (
    <nav>
      <div className={styles.nav}>
        <a href="/">
          <p className={styles.nav__logo}>
            Ankieta
          </p>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
