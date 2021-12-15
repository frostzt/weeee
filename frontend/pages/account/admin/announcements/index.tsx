import axios from 'axios';
import { useMutation } from '@apollo/client';
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
import { createAnnoucementMutation } from '../../../../GraphQLQueries/announcementQueries';
import Creator from 'CompanyComponents/CoreComponents/Creator/Creator';

interface AnnouncementType {
  createdAt: string;
  description: string;
  id: string;
  title: string;
  updatedAt: string;
}

const AnnouncementsPage: React.FC = () => {
  const [err, setErr] = useState<any>();
  const [showCreator, setShowCreator] = useState<boolean>(false);
  const [allAnnouncement, setAllAnnouncements] = useState<AnnouncementType[]>([]);

  const [createAnnouncement, { data, loading, error }] = useMutation(createAnnoucementMutation);

  // Fetch latest data for announcements
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${NEXT_URL}/api/announcements/getCompanyAnnouncements`);
        setAllAnnouncements(response.data.announcements);
      } catch (error) {
        setErr(error);
      }
    };
    fetchData();
  }, [data]);

  const handleCreatorToggle = () => {
    setShowCreator((prev) => !prev);
  };

  if (err) {
    toast.error(err.message);
  }

  return (
    <Fragment>
      {showCreator && (
        <Creator className={styles.creator}>
          <div className="">Imma Creator</div>
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
