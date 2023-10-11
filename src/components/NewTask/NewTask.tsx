import styles from "./NewTask.module.scss";

import { PlusCircleIcon } from "../../assets/icons/PlusCircleIcon";
import { ChangeEvent, useState } from "react";

interface NewTaskProps {
  onCreateTask: (title: string) => void;
}

export const NewTask = ({ onCreateTask }: NewTaskProps) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleAddTaskButtonClick = () => {
    if (title.trim() === "") return;

    onCreateTask(title);

    setTitle("");
  };

  return (
    <div className={styles["new-task"]}>
      <input
        placeholder='Adicione uma nova tarefa'
        value={title}
        onChange={handleTitleChange}
      />

      <button onClick={handleAddTaskButtonClick}>
        Criar
        <PlusCircleIcon className={styles["plus-icon"]} />
      </button>
    </div>
  );
};
