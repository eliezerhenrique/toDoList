import { useEffect, useState } from 'react';
import styles from './Task.module.css';
import { Trash } from '@phosphor-icons/react';

export interface TaskType {
  task: string;
  isDone: boolean;
}

interface TaskProps {
  task: TaskType;
  onChangeStatus: (tasks: TaskType) => void;
  onHandleDeleteTask: (tasks: TaskType) => void;
}

export function Task({ task, onChangeStatus, onHandleDeleteTask }: TaskProps) {
  const [tasks, setTasks] = useState(task);

  function handleChangeStatus() {
    if(tasks.isDone == true) {
      tasks.isDone = false
    } else {
      tasks.isDone = true
    }
    onChangeStatus(tasks);
    setTasks(tasks);
  }

  function handleDeleteTask() {
    onHandleDeleteTask(tasks);
  }

  return (
    <>
      <div className={styles.container}>
        <input 
          type="checkbox" 
          className={styles.radioTask} 
          defaultChecked={tasks.isDone}
          onClick={handleChangeStatus}
        />
        <label className={styles.lblTask}>{tasks.task}</label>
        <button className={styles.btnTrash} onClick={handleDeleteTask}>
          <Trash size={16} />
        </button>
      </div>
    </>
  )
}