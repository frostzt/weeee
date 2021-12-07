import Head from 'next/head';
import { GetServerSideProps } from 'next';
import React, { Fragment } from 'react';

import styles from './admin.module.scss';

import { Company } from 'interfaces/Company.interface';
import { withCompany } from '../../../HOC/withLoading/withCompany';
import { requireCompany } from 'HOC/requireCompany/requireCompany';

interface Props {
  company: Company;
}

const AdminPage: React.FC<Props> = ({ company }) => {
  console.log(company);

  return (
    <Fragment>
      <Head>
        <title>Weeee | Admin Dashboard</title>
        <meta name="description" content="Weeee dashboard, manage everything at one place!" />
      </Head>
      <div className={styles.container}>
        <div className={styles.header}>{company.name} - Dashboard</div>
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
