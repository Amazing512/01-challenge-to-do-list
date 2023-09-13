import { NewTask } from "../NewTask/NewTask";
import styles from "./Content.module.scss";

export const Content = () => {
  return (
    <main className={styles.container}>
      <NewTask />

      <div className={styles.tasks}>
        <div className={styles.info}>
          <span className={styles.created}>
            Tarefas criadas
            <div className='counter'></div>
          </span>
          <span className={styles.done}>
            Concluídas
            <div className='counter'></div>
          </span>
        </div>
        <div className='task-list'></div>
        <div className='task-list-empty'>
          <img />
          <span>
            Você ainda não tem tarefas cadastradas Crie tarefas e organize seus
            itens a fazer
          </span>
        </div>
      </div>
    </main>
  );
};
