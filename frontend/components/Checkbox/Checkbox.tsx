import React from 'react';

// Styles
import cx from 'classnames';
import styles from './Checkbox.module.scss';

interface Props {
  className?: string;
  name: string;
  label?: string;
  handler: () => void;
  currentState: boolean;
}

const Checkbox: React.FC<Props> = ({ handler, currentState, className, name, label }) => {
  return (
    <div className={cx([styles.container, className || null])}>
      {label?.trim() ? <label htmlFor={name}>{label}</label> : null}
      <input type="checkbox" name={name} checked={currentState} onChange={handler} />
    </div>
  );
};

export default Checkbox;
