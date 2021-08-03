import React, { useState } from 'react';
import { User } from '../../../interfaces/User.interface';
import styles from './EditProfile.module.scss';

// Components
import { Button } from '../../Button/Button';

interface Props {
  user: User;
}

const EditProfile: React.FC<Props> = ({ user }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="name">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.group__input}
            type="text"
            name="name"
          />
        </div>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="username">
            Username
          </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={styles.group__input}
            type="text"
            name="username"
          />
        </div>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="email">
            Email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.group__input}
            type="email"
            name="email"
          />
        </div>
        <div className={styles.btns}>
          <Button extraClass={styles.signup} handler={(e: Event) => console.log(e)}>
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
