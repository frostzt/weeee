import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext/Auth.context';

// Components
import { User } from '../../../interfaces/User.interface';
import { Button, DivButton } from '../../Button/Button';
import ProfilePicture from '../ProfilePicture/ProfilePicture';

// Styling
import styles from './EditProfile.module.scss';

interface Props {
  user: User;
  stateHandler(): void;
}

const EditProfile: React.FC<Props> = ({ user, stateHandler }) => {
  // Initialize the states
  const [age, setAge] = useState(0);
  const [bio, setBio] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');

  const { updateUser } = useContext(AuthContext);

  // Update the states to the user informations
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setUsername(user.username);
      setAge(user.age ? user.age : 0);
      setBio(user.bio ? user.bio : '');
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Your information!</h2>
      <div className={styles.profileWrapper}>
        <ProfilePicture isUpdating extraClass={styles.profilePicture} picture={user.picture ? user.picture : 'dog'} />
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
            disabled
          />
        </div>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="age">
            Age
          </label>
          <input
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
            className={styles.group__input}
            type="number"
            name="age"
          />
        </div>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="bio">
            Bio
          </label>
          <input
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className={styles.group__input}
            type="text"
            name="bio"
            placeholder="Tell us something about yourself..."
          />
        </div>
        <div className={styles.btns}>
          <Button extraClass={styles.signup} handler={(e: Event) => updateUser(e, { name, age, email, username, bio })}>
            Update
          </Button>
          <DivButton handler={stateHandler} extraClass={styles.discard}>
            Discard
          </DivButton>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
