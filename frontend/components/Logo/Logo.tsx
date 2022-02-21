import React, { CSSProperties } from "react";
import { motion } from "framer-motion";

// Styles
import styles from "./Logo.module.scss";

interface Props {
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
  extraStyle?: CSSProperties;
}

const Logo: React.FC<Props> = ({ extraStyle, className, initial, animate, transition }) => {
  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      style={extraStyle}
      className={`${styles.container} ${className ? className : ""}`}
    >
      <div className={styles.logo}>W</div>
    </motion.div>
  );
};

export default Logo;
