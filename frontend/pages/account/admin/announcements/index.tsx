import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState, Fragment } from 'react';
import { IoMdArrowDropleftCircle } from 'react-icons/io';

import { withCompany } from '../../../../HOC/withLoading/withCompany';
import { requireCompany } from '../../../../HOC/requireCompany/requireCompany';
import Announcement from '../../../../components/DashboardComponents/CompanyAnnouncements/Announcement/Announcement';
import Button, { BackLogoutButtonWithLink } from '../../../../CompanyComponents/CoreComponents/BackLogoutButton/BackLogoutButton';

import styles from './announcements.module.scss';
import { NEXT_URL } from 'Config/Config';
import toast from 'react-hot-toast';
import Creator from 'CompanyComponents/CoreComponents/Creator/Creator';
import { DivButton } from 'components/Button/Button';

interface AnnouncementType {
  createdAt: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
}

const AnnouncementsPage: React.FC = () => {
  const [err, setErr] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [showCreator, setShowCreator] = useState<boolean>(false);
  const [allAnnouncement, setAllAnnouncements] = useState<AnnouncementType[]>([]);

  // Data For Creator
  const [desc, setDesc] = useState<string>('');
  const [title, setTitle] = useState<string>('');

  // Fetch latest data for announcements
  useEffect(() => {
    if (!loading) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${NEXT_URL}/api/announcements/getCompanyAnnouncements`);
          setAllAnnouncements(response.data.announcements);
        } catch (error) {
          setErr(error);
        }
      };
      fetchData();
    }
  }, [loading]);

  const handleCreatorToggle = () => {
    setShowCreator((prev) => !prev);
  };

  const handleCreateAnnouncement = async () => {
    try {
      setLoading(true);
      await axios.post(`${NEXT_URL}/api/announcements/createAnnouncement`, {
        title,
        description: desc,
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
          <h3 className={styles.creator__title}>Create a new announcement!</h3>
          <div className={styles.creator__group}>
            <label htmlFor="announcement-title" className={styles.creator__group_title}>
              Title:
            </label>
            <input
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
              type="text"
              name="announcement-title"
              placeholder="Title here..."
              className={styles.creator__group_input}
            />
          </div>
          <div className={styles.creator__group}>
            <label htmlFor="announcement-desc" className={styles.creator__group_title} style={{ marginBottom: '1rem' }}>
              Description
            </label>
            <textarea
              value={desc}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDesc(e.target.value)}
              name="announcement-desc"
              cols={30}
              style={{ borderRadius: '0.5rem', padding: '1rem' }}
              rows={10}
              placeholder="More about it..."
            />
          </div>
          <DivButton extraClass={styles.creator__button} handler={handleCreateAnnouncement}>
            Create Announcement
          </DivButton>
        </Creator>
      )}
      <div className={styles.container}>
        <div className={styles.header}>Announcements</div>
        <div className={styles.content}>
          {allAnnouncement &&
            allAnnouncement.length > 0 &&
            allAnnouncement.map((announcement) => (
              <Announcement
                key={announcement.id}
                title={announcement.title}
                time={announcement.createdAt}
                description={announcement.description}
              />
            ))}
        </div>
        <BackLogoutButtonWithLink className={styles.back} href="/account/admin">
          <div>
            <IoMdArrowDropleftCircle />
          </div>
        </BackLogoutButtonWithLink>
        <Button handler={handleCreatorToggle} className={styles.btn}>
          Create new Announcement
        </Button>
      </div>
    </Fragment>
  );
};

export default withCompany(AnnouncementsPage);

export const getServerSideProps: GetServerSideProps = requireCompany(async () => {
  return {
    props: {},
  };
});
