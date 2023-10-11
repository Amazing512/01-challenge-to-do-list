import { TaskProps } from "../../@types";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  task: TaskProps;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <div className={styles.container}>
      <div>
        <Checkbox value={task.isDone} onChange={() => {}} />
      </div>
      <p className={styles.content}>{task.title}</p>
      <div>
        <button className={styles["remove-button"]}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
