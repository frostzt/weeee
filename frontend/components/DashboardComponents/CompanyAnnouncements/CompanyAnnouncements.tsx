import React from 'react';

// Styling
import cx from 'classnames';
import styles from './CompanyAnnouncements.module.scss';

interface Props {
  extrastyles?: string;
}

const CompanyAnnouncements: React.FC<Props> = ({ extrastyles }) => {
  return <div className={cx([styles.container, extrastyles ? extrastyles : null])}></div>;
};

export default CompanyAnnouncements;
