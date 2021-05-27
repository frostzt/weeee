import React from "react";

// Styles
import { motion } from "framer-motion";
import styles from "./FeatureCard.module.scss";

interface Props {
  title: string;
  desc: string;
}

const FeatureCard: React.FC<Props> = ({ title, desc }) => {
  return <motion.div className={styles.card}></motion.div>;
};

export default FeatureCard;
