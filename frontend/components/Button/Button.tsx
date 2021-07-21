import React from 'react';

// Style
import { motion } from 'framer-motion';
import styles from './Button.module.scss';

interface Props {
  extraClass?: string;
  handler: any;
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
