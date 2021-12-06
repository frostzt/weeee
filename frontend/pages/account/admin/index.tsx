import React from 'react';
import { GetServerSideProps } from 'next';

import { requireCompany } from 'HOC/requireCompany/requireCompany';

const AdminPage: React.FC = () => {
  return <h1>I am Company</h1>;
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = requireCompany(async () => {
  return {
    props: {},
  };
});
