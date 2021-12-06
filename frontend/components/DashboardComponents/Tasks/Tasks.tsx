import axios from 'axios';
import cx from 'classnames';
import React, { useEffect, useState } from 'react';

import { FullUser } from 'interfaces/User.interface';

import styles from './Tasks.module.scss';
import { NEXT_URL } from 'Config/Config';
import Task from './Task/Task';
import TaskInterface from './Tasks.interface';

interface Props {
  user: FullUser;
  noCompany: boolean;
  handler: () => void;
  extrastyles?: string;
}

const Tasks: React.FC<Props> = ({ user, noCompany, handler, extrastyles }) => {
  const [err, setErr] = useState<any>();
  const [data, setData] = useState<TaskInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${NEXT_URL}/api/getTasks`);
        setData(response.data.task);
      } catch (error) {
        setErr(error);
      }
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
        {err && <div style={{ color: 'white' }}>Seems like there was an erro!</div>}
        {data && data.length > 0 ? (
          data?.map((taskItem) => (
            <Task key={taskItem.id} id={taskItem.id} title={taskItem.title} description={taskItem.description} status={taskItem.status} />
          ))
        ) : (
          <div style={{ color: 'white' }}>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
