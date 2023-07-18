import styles from "../../scss/sections/Footer.module.scss";
import linkedin from "../../assets/img/linkedin.svg";
import github from "../../assets/img/github.svg";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__container}>
          <div className={styles.footer__headline}>
            <div className={styles.footer__socials}>
              <a
                href="https://www.linkedin.com/in/micha%C5%82-wolny-255a00168/"
                target="_blank"
                rel="nofollow, noopener"
              >
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a
                href="https://github.com/MichalWolnyDev"
                target="_blank"
                rel="nofollow, noopener"
              >
                <img src={github} alt="github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
