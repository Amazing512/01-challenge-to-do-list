import { TaskProps } from "../../@types";
import { TrashIcon } from "../../assets/icons/TrashIcon";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./TaskItem.module.scss";

interface TaskItemProps {
  task: TaskProps;
  index: number;
  deleteTask: (index: number) => void;
  toggleTask: (index: number) => void;
}

export const TaskItem = ({
  task,
  index,
  toggleTask,
  deleteTask,
}: TaskItemProps) => {
  const handleCheckboxChange = () => toggleTask(index);

  const handleDeleteButtonClick = () => deleteTask(index);

  return (
    <div className={styles.container}>
      <div>
        <Checkbox value={task.isDone} onChange={handleCheckboxChange} />
      </div>
      <p className={styles.content} data-done={task.isDone}>
        {task.title}
      </p>
      <div>
        <button
          className={styles["remove-button"]}
          onClick={handleDeleteButtonClick}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};
