import Image from "next/image";
import React, { Fragment } from "react";

// Styles
import { motion } from "framer-motion";
import styles from "./FeaturePopup.module.scss";

interface Props {
  color: string;
  heroUrl: string;
  handler: any;
}

const FeaturePopup: React.FC<Props> = ({ color, handler, heroUrl }) => {
  return (
    <Fragment>
      <motion.div className={styles.container}>
        <motion.div className={styles.imageContainer} style={{ backgroundColor: color }}>
          <Image className={styles.imageContainer__image} src={heroUrl} layout="fill" />
        </motion.div>
        <motion.div className={styles.content}></motion.div>
      </motion.div>
      <motion.div onClick={handler} className={styles.backdrop} />
    </Fragment>
  );
};

export default FeaturePopup;
