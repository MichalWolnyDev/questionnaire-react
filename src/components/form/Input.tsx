import styles from "../../scss/form/Input.module.scss";

interface IProps {
  type: string;
  placeholder: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  id?: string;
  name?: string;
}

const Input = (props: IProps) => {
  return (
    <input
      className={styles.input}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      maxLength={props?.maxLength}
      id={props.id}
      name={props.name}
    />
  );
};

export default Input;
