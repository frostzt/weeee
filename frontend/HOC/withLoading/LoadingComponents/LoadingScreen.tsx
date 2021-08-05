import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.scss';
import { ContainerVarient } from './LoadingScreen.varients';

const LoadingScreen = () => {
  return (
    <motion.div variants={ContainerVarient} initial="initial" animate="animated" className={styles.container}>
      <motion.div className="" />
      <motion.div className="" />
      <motion.div className="" />
      <motion.div className="" />
    </motion.div>
  );
};

export default LoadingScreen;
