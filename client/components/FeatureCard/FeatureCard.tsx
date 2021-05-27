import React from "react";
import Image from "next/image";

// Styles
import { motion } from "framer-motion";
import styles from "./FeatureCard.module.scss";

interface Props {
  image: string;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<Props> = ({ title, desc, image }) => {
  return (
    <motion.div className={styles.card}>
      <motion.div className={styles.content}>
        <Image className={styles.image} src={image} width={"100%"} height={"100%"} />
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
