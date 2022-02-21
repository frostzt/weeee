import React from 'react';

import cx from 'classnames';
import styles from './Creator.module.scss';

interface Props {
  className?: string;
  innerClassName?: string;
  children: React.ReactNode;
}

const Creator: React.FC<Props> = ({ children, className, innerClassName }) => {
  return (
    <div className={cx([styles.container, className || null])}>
      <div className={cx([styles.content, innerClassName || null])}>{children}</div>
    </div>
  );
};

export default Creator;
