import Head from 'next/head';
import { GetServerSideProps } from 'next';
import React, { Fragment, useContext } from 'react';

import styles from './admin.module.scss';

import { requireCompany } from 'HOC/requireCompany/requireCompany';
import AuthContext from 'contexts/AuthContext/Auth.context';

const AdminPage: React.FC = () => {
  const { company } = useContext(AuthContext);

  console.log(company);

  return (
    <Fragment>
      <Head>
        <title>Weeee | Admin Dashboard</title>
        <meta name="description" content="Weeee dashboard, manage everything at one place!" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>Dashboard</div>
      </div>
    </Fragment>
  );
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = requireCompany(async () => {
  return {
    props: {},
  };
});
