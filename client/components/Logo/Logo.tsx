import React, { CSSProperties } from "react";
import Image from "next/image";

// Styles
import styles from "./Logo.module.scss";

interface Props {
  className?: string;
  extraStyle?: CSSProperties;
}

const Logo: React.FC<Props> = ({ extraStyle, className }) => {
  return (
    <div
      style={extraStyle}
      className={`${styles.container} ${className ? className : ""}`}
    >
      <div className={styles.logo}>W</div>
    </div>
  );
};

export default Logo;
