import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NEXT_URL } from 'Config/Config';

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
}

const CompanyAnnouncements: React.FC<Props> = ({ extrastyles, user, handler, noCompany }) => {
  const [err, setErr] = useState<any>();
  const [data, setData] = useState<AnnouncementInterface[]>([]);

  useEffect(() => {
    if (!noCompany) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${NEXT_URL}/api/announcements/getAnnouncements`);
          setData(response.data.announcements);
        } catch (error) {
          setErr(error);
        }
      };
      fetchData();
    }
  }, []);

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
        {err && <div style={{ color: 'white' }}>There was an error, please try refreshing the page!</div>}
        {!data || data.length === 0 ? <div style={{ color: 'white' }}>There were no announcements found!</div> : null}
        {!noCompany && (
          <>
            {data && data.length > 0 ? (
              data?.map((annoucementItem) => (
                <Annoucement
                  key={annoucementItem.id}
                  title={annoucementItem.title}
                  description={annoucementItem.description}
                  time={annoucementItem.createdAt}
                />
              ))
            ) : (
              <div style={{ color: 'white' }}>Loading...</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CompanyAnnouncements;
