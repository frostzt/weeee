import React, { useState, useEffect } from 'react';
import { User } from '../../../interfaces/User.interface';
import styles from './EditProfile.module.scss';

// Components
import { Button } from '../../Button/Button';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

interface Props {
  user: User;
  stateHandler(): void;
}

const EditProfile: React.FC<Props> = ({ user, stateHandler }) => {
  // Initialize the states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  // Update the states to the user
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setUsername(user.username);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your information!</h2>
      <div className={styles.profileWrapper}>
        <ProfilePicture extraClass={styles.profilePicture} picture={user.picture ? user.picture : 'dog'} />
      </div>
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
