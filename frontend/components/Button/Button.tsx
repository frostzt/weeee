import React from 'react';
import Link from 'next/link';
import cx from 'classnames';

// Style
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

interface Props {
  extraClass?: string;
  handler: any;
}

interface LinkedProps {
  extraClass?: string;
  link: string;
  override?: boolean;
}

export const DivButton: React.FC<Props> = ({
  children,
  extraClass,
  handler,
}) => {
  return (
    <motion.div
      onClick={handler}
      whileHover={{
        scale: '1.1',
      }}
      whileTap={{
        scale: '0.9',
      }}
      className={`${styles.button} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </motion.div>
  );
};

export const Button: React.FC<Props> = ({ children, extraClass, handler }) => {
  return (
    <motion.button
      onClick={handler}
      whileHover={{
        scale: '1.1',
      }}
      whileTap={{
        scale: '0.9',
      }}
      className={`${styles.button} ${extraClass ? extraClass : ''}`}
    >
      {children}
    </motion.button>
  );
};

export const LinkedButton: React.FC<LinkedProps> = ({
  children,
  extraClass,
  link,
  override,
}) => {
  if (override) {
    return (
      <Link href={link}>
        <div className={cx([extraClass])}>{children}</div>
      </Link>
    );
  }
  return (
    <Link href={link}>
      <div className={cx([styles.button, extraClass ? extraClass : null])}>
        {children}
      </div>
    </Link>
  );
};
