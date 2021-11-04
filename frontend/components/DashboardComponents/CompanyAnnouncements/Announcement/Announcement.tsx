import React from 'react';

// Styling
import styles from './Announcement.module.scss';

interface Props {
  title: string;
  description: string;
}

const Announcement: React.FC<Props> = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

export default Announcement;
