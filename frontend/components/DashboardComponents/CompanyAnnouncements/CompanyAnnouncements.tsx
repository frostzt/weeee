import React from 'react';

// Styling
import cx from 'classnames';
import styles from './CompanyAnnouncements.module.scss';
import { FullUser } from 'interfaces/User.interface';

interface Props {
  user: FullUser;
  handler: () => void;
  extrastyles?: string;
}

const CompanyAnnouncements: React.FC<Props> = ({ extrastyles, user, handler }) => {
  return (
    <div className={cx([styles.container, extrastyles ? extrastyles : null])}>
      <div className={styles.close} onClick={handler}>
        X
      </div>
      <h2 className={styles.title}>Announcements at {user.companyOrOrganization.name}</h2>
      <div className={styles.content}></div>
    </div>
  );
};

export default CompanyAnnouncements;
