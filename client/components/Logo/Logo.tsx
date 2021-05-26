import React, { CSSProperties } from "react";
import Image from "next/image";

// Styles
import styles from "./Logo.module.scss";

interface Props {
  extraStyle?: CSSProperties;
}

const Logo: React.FC<Props> = ({ extraStyle }) => {
  return (
    <div style={extraStyle} className={styles.container}>
      <div className={styles.logo}>W</div>
    </div>
  );
};

export default Logo;
