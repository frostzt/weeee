import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { IoMdArrowDropleftCircle } from 'react-icons/io';
import { withCompany } from 'HOC/withLoading/withCompany';
import { requireCompany } from 'HOC/requireCompany/requireCompany';
import { BackLogoutButtonWithLink } from 'CompanyComponents/CoreComponents/NavigationButton/BackLogoutButton/BackLogoutButton';

import styles from './announcements.module.scss';

const AnnouncementsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>Announcements</div>
      <BackLogoutButtonWithLink className={styles.back} href="/account/admin">
        <IoMdArrowDropleftCircle />
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
