import axios from 'axios';
import React, { useState } from 'react';
import { TaskStatus } from '../Tasks.interface';

// Styling
import cx from 'classnames';
import styles from './Task.module.scss';
import { NEXT_URL } from 'Config/Config';

interface Props {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

const Task: React.FC<Props> = ({ id, title, description, status }) => {
  const [currentStatus, setCurrentStatus] = useState<TaskStatus>(status);

  const handleStatusChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      // @ts-expect-error 'e.target.value' is of type string, however fixed to type TaskStatus therefore no problem UNLESS the options are modified
      setCurrentStatus(e.target.value);
      await axios.post(`${NEXT_URL}/api/updateTaskStatus`, { status: e.target.value, task: id });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className={cx([
        styles.container,
        status === TaskStatus.DONE && styles.done,
        status === TaskStatus.BACKLOG && styles.backlog,
        status === TaskStatus.IN_PROGRESS && styles.inProgress,
      ])}
    >
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <div className={styles.status}>
          <div
            className={cx([
              styles.status__item,
              status === TaskStatus.DONE && styles.done,
              status === TaskStatus.BACKLOG && styles.backlog,
              status === TaskStatus.IN_PROGRESS && styles.inProgress,
            ])}
          />
          <select className={styles.status__options} name="status" id="status" value={currentStatus} onChange={handleStatusChange}>
            <option value={TaskStatus.DONE}>Done</option>
            <option value={TaskStatus.BACKLOG}>Backlog</option>
            <option value={TaskStatus.IN_PROGRESS}>In Progress</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Task;
