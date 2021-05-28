import React from "react";

// Style
import { motion } from "framer-motion";
import styles from "./Button.module.scss";

interface Props {
  extraClass?: string;
}

const Button: React.FC<Props> = ({ children, extraClass }) => {
  return (
    <motion.div
      whileHover={{
        scale: "1.1",
      }}
      className={`${styles.button} ${extraClass ? extraClass : ""}`}
    >
      {children}
    </motion.div>
  );
};

export default Button;
