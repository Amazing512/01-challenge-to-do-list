import { Dispatch, SetStateAction } from "react";
import { TaskProps } from "../../@types";
import Clipboard from "../../assets/images/Clipboard.png";
import { TaskItem } from "../TaskItem/TaskItem";
import styles from "./TaskList.module.scss";

interface TaskListProps {
  tasks: TaskProps[];
  setTasks: Dispatch<SetStateAction<TaskProps[]>>;
}

export const TaskList = ({ tasks, setTasks }: TaskListProps) => {
  const handleToggleTask = (index: number) => {
    if (!tasks[index]) return;

    setTasks((tasks) => {
      const taskArrayCopy = [...tasks];
      const taskCopy: TaskProps = {
        ...tasks[index],
        isDone: !tasks[index].isDone,
      };

      taskArrayCopy.splice(index, 1, taskCopy);

      return taskArrayCopy;
    });
  };

  const handleDeleteTask = (index: number) => {
    if (!tasks[index]) return;

    setTasks((tasks) => {
      const taskArrayCopy = [...tasks];

      taskArrayCopy.splice(index, 1);

      return taskArrayCopy;
    });
  };

  return (
    <>
      {tasks.length !== 0 ? (
        <div className={styles.container}>
          {tasks.map((task, index) => (
            <TaskItem
              key={task.id}
              task={task}
              index={index}
              toggleTask={handleToggleTask}
              deleteTask={handleDeleteTask}
            />
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
