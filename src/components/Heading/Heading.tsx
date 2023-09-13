import Logo from "../../assets/Logo.svg";
import styles from "./Heading.module.scss";

export const Heading = () => {
  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} />
    </div>
  );
};
