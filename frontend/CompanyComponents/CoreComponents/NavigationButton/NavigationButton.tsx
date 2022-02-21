import React from 'react';
import Link from 'next/link';

import cx from 'classnames';
import styles from './NavigationButton.module.scss';

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const NavigationButton: React.FC<Props> = ({ href, children, className }) => {
  return (
    <div className={cx([styles.content, className || null])}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default NavigationButton;
