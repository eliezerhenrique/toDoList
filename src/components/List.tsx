import styles from "./List.module.css";
import empty from "../assets/Clipboard.svg";
import { Task } from "./Task";
import { useEffect, useState } from "react";


export function List() {
  const [taskDone, setTaskDone] = useState(0);
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskTotal, setTaskTotal] = useState(0);


  return (
    <>
      <div className={styles.container}>
        <header>
          <div className={styles.createTask}>
            <h5>Tarefas Criadas</h5>
            <span>{taskCreated}</span>
          </div>
          <div className={styles.taskFinish}>
            <h5>Concluidas</h5>
            <span>{(taskTotal == 0 ? taskTotal : `${taskDone} de ${taskTotal}`)}</span>
          </div>
        </header>
        {(taskCreated == 0 ? 
          <div className={styles.empty}>
            <img src={empty} alt="task" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> : 
          <div className={styles.list}>
          
          </div>
          )}
      </div>
    </>
  );
}
