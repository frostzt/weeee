import React, { useContext } from 'react';
import NavigationBarContext from '../../contexts/NavigationBar/NavigationBar.context';

// Styling
import { AiFillHome } from 'react-icons/ai';
import { MdArrowDropUp } from 'react-icons/md';
import styles from './NavigationBar.module.scss';

const NavigationBar: React.FC = () => {
  const { current } = useContext(NavigationBarContext);

  console.log(current);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <MdArrowDropUp />
      </div>
    </div>
  );
};

export default NavigationBar;
