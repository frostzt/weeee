import React from 'react';

// Styling
import cx from 'classnames';
import styles from './CompanyAnnouncements.module.scss';
import { FullUser } from 'interfaces/User.interface';

interface Props {
  extrastyles?: string;
  user: FullUser;
}

const CompanyAnnouncements: React.FC<Props> = ({ extrastyles, user }) => {
  return (
    <div className={cx([styles.container, extrastyles ? extrastyles : null])}>
      <h2 className={styles.title}>Announcements at {user.companyOrOrganization.name}</h2>
      <div className={styles.content}></div>
    </div>
  );
};

export default CompanyAnnouncements;
