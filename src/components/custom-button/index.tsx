import styles from "./customButton.module.scss";

type CustomBtnProps = {
  text: string;
  onClick?: () => void;
};
const CustomButton = ({ text, onClick }: CustomBtnProps) => {
  return (
    <button className={styles.customBtn} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
