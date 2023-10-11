import { CheckIcon } from "../../assets/icons/CheckIcon";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  value: boolean;
  onChange: (newActiveValue: boolean) => void;
}

export const Checkbox = ({ value, onChange }: CheckboxProps) => {
  const handleClick = () => {
    onChange(!value);
  };

  return (
    <button
      className={styles.checkbox}
      data-active={value}
      onClick={handleClick}
    >
      <CheckIcon />
    </button>
  );
};
