import styles from "./Counter.module.scss";

interface CounterProps {
  current: number;
  max?: number;
}

export const Counter = ({ current, max }: CounterProps) => {
  return (
    <div className={styles.counter}>{`${current}${
      max ? ` de ${max}` : ""
    }`}</div>
  );
};
