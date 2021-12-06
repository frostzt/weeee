import axios from 'axios';
import React, { useEffect } from 'react';
import cx from 'classnames';

import { FullUser } from 'interfaces/User.interface';

import styles from './Tasks.module.scss';
import { NEXT_URL } from 'Config/Config';

interface Props {
  user: FullUser;
  noCompany: boolean;
  handler: () => void;
  extrastyles?: string;
}

const Tasks: React.FC<Props> = ({ user, noCompany, handler, extrastyles }) => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${NEXT_URL}/api/getTasks`);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className={cx([styles.container, extrastyles || null])}>
      <div className={styles.close} onClick={handler}>
        X
      </div>
      <h2 className={styles.title}>Tasks for you at {user.companyOrOrganization.name}</h2>
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
        {/* {data && data.length > 0
          ? data?.map((taskItem) => (
              <Task
                key={taskItem.id}
                id={taskItem.id}
                title={taskItem.title}
                description={taskItem.description}
                status={taskItem.status}
              />
            ))
          : null} */}
      </div>
    </div>
  );
};

export default Tasks;
