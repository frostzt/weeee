import React from 'react';
import { GetServerSideProps } from 'next';

import { requireAuthentication } from 'HOC/requireAuthentication/requireAuthentication';

const AdminPage: React.FC = () => {
  return <div></div>;
};

export default AdminPage;

export const getServerSideProps: GetServerSideProps = requireAuthentication(async () => {
  return {
    props: {},
  };
}, true);
