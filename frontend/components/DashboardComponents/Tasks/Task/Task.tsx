import React from 'react';

// Styling
import styles from './Task.module.scss';

interface Props {
  title: string;
  description: string;
}

const Task: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
      </div>
    </div>
  );
};

export default Task;
