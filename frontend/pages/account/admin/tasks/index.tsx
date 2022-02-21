import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState, Fragment } from 'react';
import { IoMdArrowDropleftCircle } from 'react-icons/io';

import { withCompany } from '../../../../HOC/withLoading/withCompany';
import { requireCompany } from '../../../../HOC/requireCompany/requireCompany';
import Task from '../../../../components/DashboardComponents/Tasks/Task/Task';
import Button, { BackLogoutButtonWithLink } from '../../../../CompanyComponents/CoreComponents/BackLogoutButton/BackLogoutButton';

import styles from './tasks.module.scss';
import { NEXT_URL } from 'Config/Config';
import toast from 'react-hot-toast';
import Creator from 'CompanyComponents/CoreComponents/Creator/Creator';
import { DivButton } from 'components/Button/Button';
import { TaskStatus } from 'components/DashboardComponents/Tasks/Tasks.interface';

interface TaskType {
  createdAt: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
  status: TaskStatus;
}

interface Emp {
  email: string;
  id: string;
  username: string;
  name: string;
}

const TaskPage: React.FC = () => {
  const [emps, setEmps] = useState<Emp[]>();
  const [err, setErr] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [showCreator, setShowCreator] = useState<boolean>(false);
  const [tasks, setAllTasks] = useState<TaskType[]>([]);

  // Data For Creator
  const [desc, setDesc] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [assignedTo, setAssignedTo] = useState('');

  // Fetch latest data for announcements
  useEffect(() => {
    if (!loading) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${NEXT_URL}/api/tasks/getAllTasks`);
          setAllTasks(response.data.tasks);
        } catch (error) {
          setErr(error);
        }
      };
      fetchData();
    }
  }, [loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${NEXT_URL}/api/company/getAllEmployees`);
        setEmps(response.data.employees);
      } catch (error) {
        setErr(error);
      }
    };

    fetchData();
  }, []);

  const handleCreatorToggle = () => {
    setShowCreator((prev) => !prev);
  };

  const handleCreateTask = async () => {
    try {
      setLoading(true);
      await axios.post(`${NEXT_URL}/api/tasks/createTask`, {
        title,
        description: desc,
        assignedTo,
      });
      setLoading(false);
    } catch (error) {
      setErr(err.message);
    }
  };

  if (err) {
    toast.error(err.message);
  }

  return (
    <Fragment>
      {showCreator && (
        <Creator className={styles.creator} innerClassName={styles.inner}>
          <h3 className={styles.creator__title}>Create a new Task!</h3>
          <div className={styles.creator__group}>
            <label htmlFor="task-title" className={styles.creator__group_title}>
              Title:
            </label>
            <input
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              type="text"
              name="task-title"
              placeholder="Title here..."
              className={styles.creator__group_input}
            />
          </div>
          <div className={styles.creator__group}>
            <label htmlFor="task-desc" className={styles.creator__group_title}>
              Description
            </label>
            <textarea
              value={desc}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)}
              name="task-desc"
              cols={30}
              style={{ borderRadius: '0.5rem', padding: '1rem' }}
              rows={10}
              placeholder="More about it..."
            />
          </div>
          <div className={styles.creator__group}>
            <label htmlFor="task-for" className={styles.creator__group_title} style={{ marginBottom: '1rem' }}>
              Assign to
            </label>
            <select
              name="task-for"
              value={assignedTo}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setAssignedTo(e.target.value)}
            >
              {emps &&
                emps.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.name}
                  </option>
                ))}
            </select>
          </div>
          <DivButton extraClass={styles.creator__button} handler={handleCreateTask}>
            Create Task
          </DivButton>
        </Creator>
      )}
      <div className={styles.container}>
        <div className={styles.header}>Tasks</div>
        <div className={styles.content}>
          {tasks &&
            tasks.length > 0 &&
            tasks.map((task) => (
              <Task id={task.id} key={task.id} title={task.title} status={task.status} description={task.description} />
            ))}
        </div>
        <BackLogoutButtonWithLink className={styles.back} href="/account/admin">
          <div>
            <IoMdArrowDropleftCircle />
          </div>
        </BackLogoutButtonWithLink>
        <Button handler={handleCreatorToggle} className={styles.btn}>
          Create new Task
        </Button>
      </div>
    </Fragment>
  );
};

export default withCompany(TaskPage);

export const getServerSideProps: GetServerSideProps = requireCompany(async () => {
  return {
    props: {},
  };
});
