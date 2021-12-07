import React from 'react';
import { GetServerSideProps } from 'next';

import { requireCompany } from 'HOC/requireCompany/requireCompany';

const AdminPage: React.FC = () => {
  return <div>I am Company</div>;
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = requireCompany(async () => {
  return {
    props: {},
  };
});
