import styles from "./NewTask.module.scss";

import { PlusCircleIcon } from "../../assets/icons/PlusCircleIcon";

export const NewTask = () => {
  return (
    <div className={styles["new-task"]}>
      <input placeholder='Adicione uma nova tarefa' />
      <button>
        Criar
        <PlusCircleIcon className={styles["plus-icon"]} />
      </button>
    </div>
  );
};
