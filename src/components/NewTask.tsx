import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";
import empty from "../assets/Clipboard.svg";
import { useEffect, useState } from "react";
import { Task, TaskType } from "./Task";

export function NewTask() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState<TaskType[]>([] as TaskType[]);
  const [taskDone, setTaskDone] = useState(0);
  const [taskCreated, setTaskCreated] = useState(0);
  const [taskTotal, setTaskTotal] = useState(0);

  useEffect(() => {
    handleChangeStatus();
  }, [listTask])

  function handleNewTask() {
    let list: TaskType[];
    list = listTask;
    let newTask =  {
      task: task,
      isDone: false
    }
    
    list.push(newTask);
    setListTask(list);
    setTaskCreated(listTask.length);
    setTaskTotal(listTask.length);
    setTask('');
  }

  function handleChangeStatus() {
    let countTasksDone = 0;
    listTask.forEach(item => {
      if(item.isDone) {
        countTasksDone ++;
      }
    })
    setTaskDone(countTasksDone);
  }

  function handleDeleteTask(taskDeleted: TaskType) {
    const tasksFiltered = listTask.filter(item => {
      return item !== taskDeleted
    })
    setListTask(tasksFiltered)
    setTaskCreated(tasksFiltered.length);
    setTaskTotal(tasksFiltered.length);
  }

  return (
    <>
      <div className={styles.container}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={task}
          className={styles.task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className={styles.btnTask} onClick={handleNewTask}>
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
      <div className={styles.containerList}>
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
        {(listTask.length == 0 ? 
          <div className={styles.empty}>
            <img src={empty} alt="task" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
          :
          <div className={styles.list}>
            {listTask.map(item => {
              return <Task 
                key={item.task}
                task={item} 
                onChangeStatus={handleChangeStatus}
                onHandleDeleteTask={handleDeleteTask}
              />
            })}
          </div>
        )}
      </div>
    </>
  );
}
