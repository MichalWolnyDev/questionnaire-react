import { useEffect } from "react";
import styles from "../../scss/question/Diagram.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import smile from "../../assets/img/smile.png";
import { updateSummary } from "../../store/slices/summarySlice";
import { useDispatch } from "react-redux";
import { calcPercent } from "../../helpers/calcPercent";

type DiagramProps = {
  total: number;
  count: number;
  groupId: number,
  sendPercentage: (val: number) => number;
};

const Diagram = (props: DiagramProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
      props.sendPercentage(calcPercent(props.count, props.total));
      dispatch(updateSummary([props.groupId, calcPercent(props.count, props.total)]))

  }, [props.count, props.total, props.groupId]);


  return (
    <div className={styles.diagram}>
      <CircularProgressbar
        value={calcPercent(props.count, props.total)}
        text={`${calcPercent(props.count, props.total)}%`}
        styles={buildStyles({
          textSize: "1.2rem",
          textColor: "#000",
          pathColor: "#000",
        })}
      />
      {props.count === props.total && (
        <div className={styles.diagram__smile}>
          <img src={smile} alt="smile" />
        </div>
      )}
    </div>
  );
};

export default Diagram;
