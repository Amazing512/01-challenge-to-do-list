import styles from "./NewTask.module.scss";
export const NewTask = () => {
  return (
    <div className={styles["new-task"]}>
      <input placeholder='Adicione uma nova tarefa' />
      <button>Criar</button>
    </div>
  );
};
