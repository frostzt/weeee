import Image from "next/image";
import React, { Fragment, useEffect } from "react";

// Styles
import { motion, useAnimation } from "framer-motion";
import styles from "./FeaturePopup.module.scss";

interface Props {
  color: string;
  heroUrl: string;
  handler: any;
}

const FeaturePopup: React.FC<Props> = ({ color, handler, heroUrl }) => {
  const backdropControl = useAnimation();
  const imageControl = useAnimation();
  const contentControl = useAnimation();

  const sequence = async () => {
    await backdropControl.start({ opacity: 1 }, { duration: 0.3 });
    await imageControl.start({ x: 0, opacity: 1 }, { duration: 0.3 });
    return await contentControl.start({ x: 0, opacity: 1 }, { duration: 0.3 });
  };

  useEffect(() => {
    sequence();
  }, []);

  return (
    <Fragment>
      <motion.div className={styles.container}>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={imageControl}
          className={styles.imageContainer}
          style={{ backgroundColor: color }}
        >
          <Image priority className={styles.imageContainer__image} src={heroUrl} layout="fill" />
        </motion.div>
        <motion.div initial={{ x: -200, opacity: 0 }} animate={contentControl} className={styles.content}></motion.div>
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={backdropControl} onClick={handler} className={styles.backdrop} />
    </Fragment>
  );
};

export default FeaturePopup;
