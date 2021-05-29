import React, { useState, Fragment } from "react";
import Image from "next/image";

// Styles
import { motion } from "framer-motion";
import styles from "./FeatureCard.module.scss";

// Components
import FeaturePopup from "../FeaturePopup/FeaturePopup";

interface Props {
  image: string;
  heroUrl: string;
  title: string;
  desc: string;
  color: string;
}

const FeatureCard: React.FC<Props> = ({ title, desc, image, color, heroUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle popping up feature
  const handleOpenFeatureCard = () => setIsOpen((prevState) => !prevState);

  return (
    <Fragment>
      {isOpen ? <FeaturePopup heroUrl={heroUrl} handler={handleOpenFeatureCard} color={color} /> : null}
      <motion.div className={styles.card}>
        <motion.div className={styles.content}>
          <motion.div
            onClick={handleOpenFeatureCard}
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
          <motion.p className={styles.desc}>
            {desc}{" "}
            <span onClick={handleOpenFeatureCard} style={{ color: `${color}`, cursor: "pointer" }}>
              Know more!
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </Fragment>
  );
};

export default FeatureCard;
