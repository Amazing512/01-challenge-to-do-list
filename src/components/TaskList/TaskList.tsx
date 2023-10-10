import { TaskProps } from "../../@types";
import Clipboard from "../../assets/images/Clipboard.png";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskList.module.scss";

interface TaskListProps {
  tasks: TaskProps[];
}

export const TaskList = ({ tasks }: TaskListProps) => {
  return (
    <>
      {tasks.length !== 0 ? (
        <div className={styles.container}>
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </div>
      ) : (
        <div className={styles["empty-container"]}>
          <img src={Clipboard} className={styles.clipboard} />
          <span>
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </span>
        </div>
      )}
    </>
  );
};
