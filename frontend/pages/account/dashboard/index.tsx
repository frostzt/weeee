import { GetServerSideProps } from 'next';
import styles from './dashboard.module.scss';

const Dashboard = (props: any) => {
  return <h1></h1>;
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  console.log(req.headers.cookie);

  return {
    props: {
      boi: 'Hello',
    },
  };
};
