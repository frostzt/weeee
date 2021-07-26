import {
  AiFillCloseCircle,
  AiFillExclamationCircle,
  AiFillCheckCircle,
} from 'react-icons/ai';
import styles from './Alert.module.scss';

interface Props {
  status: string;
  message: string;
}

const Alert: React.FC<Props> = ({ status, message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sign}>
        {status === 'error' ? <AiFillCloseCircle /> : null}
        {status === 'warning' ? <AiFillExclamationCircle /> : null}
        {status === 'success' ? <AiFillCheckCircle /> : null}
      </div>
      <div className={styles.content}>{message}</div>
    </div>
  );
};

export default Alert;
