import React from 'react';
import { IconType } from 'react-icons';

// Styles
import styles from './FeatureButtons.module.scss';

interface Props {
  Icon: IconType;
  title: string;
}

const FeatureButtons: React.FC<Props> = ({ Icon, title }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.icon}>
        <Icon className={styles.icon__inner} />
      </div>
    </div>
  );
};

export default FeatureButtons;
