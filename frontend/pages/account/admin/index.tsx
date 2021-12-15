import Head from 'next/head';
import React, { Fragment } from 'react';
import { GetServerSideProps } from 'next';

import { BiLogInCircle } from 'react-icons/bi';
import styles from './admin.module.scss';

import { Company } from 'interfaces/Company.interface';
import { withCompany } from '../../../HOC/withLoading/withCompany';
import { requireCompany } from 'HOC/requireCompany/requireCompany';
import NavigationButton from '../../../CompanyComponents/CoreComponents/NavigationButton/NavigationButton';
import Button from 'CompanyComponents/CoreComponents/BackLogoutButton/BackLogoutButton';

interface Props {
  company: Company;
  signOut: () => void;
}

const AdminPage: React.FC<Props> = ({ company, signOut }) => {
  return (
    <Fragment>
      <Head>
        <title>Weeee | Admin Dashboard</title>
        <meta name="description" content="Weeee dashboard, manage everything at one place!" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>{company.name} - Dashboard</div>
        <h2 className={styles.title} style={{ marginTop: '1rem' }}>
          Announcements
        </h2>
        <NavigationButton href="/account/admin/announcements" className={styles.button}>
          Create, Edit, View Announcements
        </NavigationButton>
        <Button handler={signOut} className={styles.logout}>
          <BiLogInCircle />
        </Button>
      </div>
    </Fragment>
  );
};

export default withCompany(AdminPage);

export const getServerSideProps: GetServerSideProps = requireCompany(async () => {
  return {
    props: {},
  };
});
