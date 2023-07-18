import styles from '../../scss/sections/Baner.module.scss'
import baner from '../../assets/img/baner_lp.jpg'

const Baner = () => {
  return (
    <section>
        <div className={styles.baner}>
            <img src={baner} className={styles.baner__image} alt="baner" />
            <div className={styles.baner__content}>
                <h1 className={styles.baner__title}>
                    Ankieta
                </h1>
            </div>
        </div>
    </section>
  )
}

export default Baner