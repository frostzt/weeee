import Link from 'next/link';
import React, { useContext, useState } from 'react';
import NavigationBarContext, { AvailablePages } from '../../contexts/NavigationBar/NavigationBar.context';

// Varients
import { containerVarient, optionVarient } from './NavigationBar.varients';

// Styling
import cx from 'classnames';
import { FaUser } from 'react-icons/fa';
import { MdArrowDropUp } from 'react-icons/md';
import { BiLogInCircle } from 'react-icons/bi';
import { AiFillDashboard } from 'react-icons/ai';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './NavigationBar.module.scss';

interface Props {
  isCompany?: boolean;
  signOut: () => void;
}

const NavigationBar: React.FC<Props> = ({ signOut, isCompany }) => {
  // States
  const [isOpen, setIsOpen] = useState(false);

  // Navigation Bar Context
  const { current } = useContext(NavigationBarContext);

  return (
    <motion.div variants={containerVarient} initial="initial" animate="animated" className={styles.container}>
      <div className={styles.main}>
        <MdArrowDropUp
          className={cx([styles.icon, isOpen ? styles.icon__rotate : styles.icon__derotate])}
          onClick={() => setIsOpen((prevState) => !prevState)}
        />
        <AnimatePresence>
          {isOpen && (
            <motion.div variants={optionVarient} initial="initial" animate="animated" exit="exit" className={styles.options}>
              <div className={styles.links}>
                <div className={styles.links__link}>
                  <Link href="/account/dashboard">
                    <div className={cx([styles.links__link_icon, current === AvailablePages.Dashboard ? styles.selected : null])}>
                      <AiFillDashboard title="Dashboard" />
                    </div>
                  </Link>
                </div>
                <div className={styles.links__link}>
                  <Link href="/account/me">
                    <div className={cx([styles.links__link_icon, current === AvailablePages.Me ? styles.selected : null])}>
                      <FaUser title="My Profile" />
                    </div>
                  </Link>
                </div>
                <div className={styles.links__link}>
                  <div onClick={signOut}>
                    <div className={cx([styles.links__link_icon])}>
                      <BiLogInCircle title="Signout" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default NavigationBar;
