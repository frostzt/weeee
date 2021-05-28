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
        <motion.div className={styles.imgContainer}>
          <Image src={image} width={65} height={65} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
