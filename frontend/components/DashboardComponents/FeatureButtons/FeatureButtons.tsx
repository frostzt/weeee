import React from 'react';
import { IconType } from 'react-icons';

// Styles
import styles from './FeatureButtons.module.scss';

interface Props {
  Icon: IconType;
}

const FeatureButtons: React.FC<Props> = ({ Icon }) => {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <Icon className={styles.icon__inner} />
      </div>
    </div>
  );
};

export default FeatureButtons;
