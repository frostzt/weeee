import React from 'react';
import Link from 'next/link';

import cx from 'classnames';
import styles from './BackLogoutButton.module.scss';

interface Props {
  children: React.ReactNode;
  handler?: () => void;
  className?: string;
}

const Button: React.FC<Props> = ({ className, handler, children }) => {
  return (
    <div onClick={handler} className={cx([styles.button, className || null])}>
      {children}
    </div>
  );
};

interface LinkProps extends Props {
  href: string;
}

export const BackLogoutButtonWithLink: React.FC<LinkProps> = ({ className, handler, children, href }) => {
  return (
    <div onClick={handler} className={cx([styles.button, className || null])}>
      <Link href={href}>{children}</Link>
    </div>
  );
};

export default Button;
