import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { IoMdArrowDropleftCircle } from 'react-icons/io';

import { withCompany } from '../../../../HOC/withLoading/withCompany';
import { requireCompany } from '../../../../HOC/requireCompany/requireCompany';
import Announcement from '../../../../components/DashboardComponents/CompanyAnnouncements/Announcement/Announcement';
import { BackLogoutButtonWithLink } from '../../../../CompanyComponents/CoreComponents/NavigationButton/BackLogoutButton/BackLogoutButton';

import styles from './announcements.module.scss';
import { NEXT_URL } from 'Config/Config';
import toast from 'react-hot-toast';

interface AnnouncementType {
  createdAt: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
}

const AnnouncementsPage: React.FC = () => {
  const [data, setData] = useState<AnnouncementType[]>([]);
  const [err, setErr] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${NEXT_URL}/api/announcements/getCompanyAnnouncements`);
        setData(response.data.announcements);
      } catch (error) {
        setErr(error);
      }
    };
    fetchData();
  }, []);

  if (err) {
    toast.error(err.message);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>Announcements</div>
      <div className={styles.content}>
        {data &&
          data.length > 0 &&
          data.map((announcement) => (
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
    </div>
  );
};

export default withCompany(AnnouncementsPage);

export const getServerSideProps: GetServerSideProps = requireCompany(async () => {
  return {
    props: {},
  };
});
