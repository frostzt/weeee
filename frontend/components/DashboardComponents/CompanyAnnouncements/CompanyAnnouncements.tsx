import React from 'react';

// Interfaces
import { FullUser } from 'interfaces/User.interface';
import AnnouncementInterface from './Announcement.interface';

// Styling
import cx from 'classnames';
import styles from './CompanyAnnouncements.module.scss';

// Components
import Annoucement from './Announcement/Announcement';

interface Props {
  user: FullUser;
  handler: () => void;
  extrastyles?: string;
  noCompany: boolean;
  err?: string;
  data?: AnnouncementInterface[];
}

const CompanyAnnouncements: React.FC<Props> = ({ extrastyles, user, handler, noCompany, data }) => {
  console.log(data);

  return (
    <div className={cx([styles.container, extrastyles ? extrastyles : null])}>
      <div className={styles.close} onClick={handler}>
        X
      </div>
      <h2 className={styles.title}>Announcements at {user.companyOrOrganization.name}</h2>
      {noCompany && (
        <div className={styles.noCompany}>
          Your account does not have a Company assigned to it, please ask your employer for an invite.
        </div>
      )}
      {noCompany && (
        <div className={styles.noCompany__beta}>
          For testing purposes we have a fake Company created please update your profile with Weeee as a company and you will be able to
          test out all the available features.
        </div>
      )}
      <div className={styles.content}>
        {data && data.length > 0
          ? data?.map((annoucementItem) => (
              <Annoucement
                key={annoucementItem.id}
                title={annoucementItem.title}
                description={annoucementItem.description}
                time={annoucementItem.createdAt}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default CompanyAnnouncements;
