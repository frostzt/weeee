import React from "react";
import Image from "next/image";

// Styles
import { motion } from "framer-motion";
import styles from "./FeatureCard.module.scss";

interface Props {
  image: string;
  title: string;
  desc: string;
  color: string;
}

const FeatureCard: React.FC<Props> = ({ title, desc, image, color }) => {
  return (
    <motion.div className={styles.card}>
      <motion.div className={styles.content}>
        <motion.div
          whileHover={{
            scale: "1.2",
          }}
          whileTap={{
            scale: "0.9",
          }}
          className={styles.imgContainer}
          style={{ backgroundColor: `${color}` }}
        >
          <Image src={image} width={65} height={65} />
        </motion.div>
        <motion.h2 className={styles.title} style={{ backgroundColor: `${color}` }}>
          {title}
        </motion.h2>
        <motion.p className={styles.desc}>{desc}</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
