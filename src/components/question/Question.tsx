import { useState } from "react";
import styles from "../../scss/question/Question.module.scss";
import { useDispatch } from "react-redux";
import { changeChecked } from "../../store/slices/questionsSlice";
import Diagram from "./Diagram";
import open from "../../assets/img/open.png";
import close from "../../assets/img/close.png";

interface QuestionProps {
  title: string;
  id: number;
  groupId: number,
  checkedCount: number;
  questions: Array<{ id: number; question: string; checked: boolean }>;
}

const Question = (props: QuestionProps) => {
  const dispatch = useDispatch();
  const [showContent, setShowContent] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const checkboxHandler = (id: number) => {
    dispatch(changeChecked(id));
  };

  const showHandler = () => {
    setShowContent((prev) => (prev = !prev));
  };

  const getPercentage = (val: number) => {
    setPercentage(val)
    return val;
  }

  return (
    <div className={styles.question}>
      <div className={styles.question__headline} onClick={showHandler}>
        <h3 className={styles.question__title}>
          {props.id}. {props.title}
        </h3>
        <div className={styles["question__headline-row"]}>
          <div className={styles["question__headline-button"]}>
            {!showContent ? (
              <img src={open} alt="Open" />
            ) : (
              <img src={close} alt="close" />
            )}
          </div>
          <p className={styles["question__headline-percentage"]}>{percentage} %</p>
        </div>
      </div>
      {showContent && (
        <div className={styles.question__row}>
          <div className={styles.question__content}>
            <ul className={styles.question__list}>
              {props.questions.map((q, id) => (
                <li key={id} className={styles["question__list-item"]}>
                  <div className={styles["question__list-question"]}>
                    <span className={styles.question__number}>
                      {props.id}.{id + 1}.
                    </span>{" "}
                    <p>{q.question}</p>
                  </div>
                  <input
                    className={styles.question__checkbox}
                    type="checkbox"
                    checked={q.checked}
                    true-value="1"
                    false-value="0"
                    onChange={() => {
                      checkboxHandler(q.id);
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.question__diagram}>
            <Diagram
            groupId={props.groupId}
              total={props.questions.length}
              count={props.checkedCount}
              sendPercentage={getPercentage}
            />
            <br />
            <div className={styles.question__counter}>
              <p>
                ({props.checkedCount} /{props.questions.length})
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Question;
