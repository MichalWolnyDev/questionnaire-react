import Container from "../ui/Container";
import styles from "../../scss/sections/Summary.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { calcPercent } from "../../helpers/calcPercent";

const Summary = () => {
  const summary = useSelector((state: RootState) => state.summary.summary);
  const totalChecked = useSelector(
    (state: RootState) => state.questions.totalChecked
  );

  return (
    <section>
      <Container>
        <div className={styles.summary}>
          <div className={styles.summary__row}>
            <div className={styles.summary__main}>
              <h3>Podsumowanie:</h3>
              <div className={styles["summary__main-values"]}>
                {summary.question.map((item, id) => (
                  <div className={styles["summary__main-item"]} key={id}>
                    <p>
                      {id + 1} - {item}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.summary__total}>
              <p className={styles["summary__total-value"]}>
                {calcPercent(totalChecked, 46)} %
              </p>
              <p className={styles["summary__total-count"]}>
                ({totalChecked}/46)
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Summary;
