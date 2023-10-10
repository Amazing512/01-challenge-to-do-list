import styles from "./Counter.module.scss";

interface CounterProps {
  value: number;
}

export const Counter = ({ value }: CounterProps) => {
  return <div className={styles.counter}>{value}</div>;
};
