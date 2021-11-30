import React from 'react';
import cx from 'classnames';

import Task from './Task/Task';
import TaskInterface from './Tasks.interface';
import { FullUser } from 'interfaces/User.interface';

import styles from './Tasks.module.scss';

interface Props {
  err?: string;
  user: FullUser;
  noCompany: boolean;
  handler: () => void;
  extrastyles?: string;
  data?: TaskInterface[];
}

const Tasks: React.FC<Props> = ({ data, user, noCompany, handler, extrastyles }) => {
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
        {data && data.length > 0
          ? data?.map((annoucementItem) => (
              <Task key={annoucementItem.id} title={annoucementItem.title} description={annoucementItem.description} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Tasks;
