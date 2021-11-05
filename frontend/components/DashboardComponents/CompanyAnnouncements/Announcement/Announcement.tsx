import React from 'react';

// Styling
import styles from './Announcement.module.scss';

interface Props {
  time: string;
  title: string;
  description: string;
}

const Announcement: React.FC<Props> = ({ title, time, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{description}</p>
        <p className={styles.time}>{new Date(time).toDateString()}</p>
      </div>
    </div>
  );
};

export default Announcement;
