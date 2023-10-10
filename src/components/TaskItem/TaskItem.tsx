import { TaskProps } from "../../@types";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  task: TaskProps;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className={styles.container}>
      <div>
        <input type='checkbox' className={styles.checkbox} />
      </div>
      <p className={styles.content}>
        {task.title}Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem
        ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit
        ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum
        dolor sit amet
      </p>
      <div>
        <button className={styles["remove-button"]}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
