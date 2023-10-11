import { useState } from "react";
import { TaskProps } from "../../@types";
import { Counter } from "../Counter/Counter";
import { NewTask } from "../NewTask/NewTask";
import { TaskList } from "../TaskList/TaskList";
import styles from "./Content.module.scss";
import { v4 as uuidv4 } from "uuid";

export const Content = () => {
  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      id: uuidv4(),
      title: "Teste",
      isDone: false,
    },
    {
      id: uuidv4(),
      title: "Teste 2",
      isDone: true,
    },
  ]);

  const tasksDone = taskList.filter((task) => task.isDone).length;

  const handleCreateTask = (title: string) => {
    setTaskList((taskList) => [
      ...taskList,
      {
        id: uuidv4(),
        title,
        isDone: false,
      },
    ]);
  };

  return (
    <main className={styles.container}>
      <NewTask onCreateTask={handleCreateTask} />

      <div className={styles.tasks}>
        <div className={styles.info}>
          <span className={styles.created}>
            Tarefas criadas
            <Counter value={taskList.length} />
          </span>
          <span className={styles.done}>
            Concluídas
            <Counter value={tasksDone} />
          </span>
        </div>
        <TaskList tasks={taskList} />
      </div>
    </main>
  );
};
