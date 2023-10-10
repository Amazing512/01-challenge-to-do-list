import { TaskProps } from "../../@types";
import { Counter } from "../Counter/Counter";
import { NewTask } from "../NewTask/NewTask";
import { TaskList } from "../TaskList/TaskList";
import styles from "./Content.module.scss";
import { v4 as uuidv4 } from "uuid";

export const Content = () => {
  const taskList: TaskProps[] = [
    {
      id: uuidv4(),
      title: "Teste",
      isDone: false,
    },
  ];
  return (
    <main className={styles.container}>
      <NewTask />

      <div className={styles.tasks}>
        <div className={styles.info}>
          <span className={styles.created}>
            Tarefas criadas
            <Counter value={0} />
          </span>
          <span className={styles.done}>
            Concluídas
            <Counter value={0} />
          </span>
        </div>
        <TaskList tasks={taskList} />
      </div>
    </main>
  );
};
