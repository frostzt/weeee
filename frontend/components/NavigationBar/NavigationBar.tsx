import React, { useContext, useState } from 'react';
import NavigationBarContext from '../../contexts/NavigationBar/NavigationBar.context';

// Varients
import { containerVarient, optionVarient } from './NavigationBar.varients';

// Styling
import { AiFillHome } from 'react-icons/ai';
import { MdArrowDropUp } from 'react-icons/md';
import styles from './NavigationBar.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const NavigationBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { current } = useContext(NavigationBarContext);

  return (
    <motion.div variants={containerVarient} initial="initial" animate="animated" className={styles.container}>
      <div className={styles.main}>
        <MdArrowDropUp onClick={() => setIsOpen((prevState) => !prevState)} />
        <AnimatePresence>
          {isOpen && (
            <motion.div variants={optionVarient} initial="initial" animate="animated" exit="exit" className={styles.options}></motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NavigationBar;
