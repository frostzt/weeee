import React, { useState, useContext } from 'react';
import styles from './SignUpForm.module.scss';

// Components
import { Button } from '../../Button/Button';
import AuthContext from '../../../contexts/AuthContext/Auth.context';

interface Props {
  creatingAccount: boolean;
  switchHandler: () => void;
}

const SignUpForm: React.FC<Props> = ({ creatingAccount, switchHandler }) => {
  // Contexts
  const { signUp } = useContext(AuthContext);

  // States
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.group}>
          <label title="Name" className={styles.group__label} htmlFor="name">
            Name
          </label>
          <input value={name} onChange={(e) => setName(e.target.value)} className={styles.group__input} type="text" name="name" />
        </div>
        <div className={styles.group}>
          <label title="Username" className={styles.group__label} htmlFor="username">
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
          <label title="Email" className={styles.group__label} htmlFor="email">
            Email
          </label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className={styles.group__input} type="email" name="email" />
        </div>
        <div className={styles.group}>
          <label title="Password" className={styles.group__label} htmlFor="password">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.group__input}
            type="password"
            name="password"
          />
        </div>
        <div className={styles.group}>
          <label title="Confirm Password" className={styles.group__label} htmlFor="cpassword">
            Confirm Password
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={styles.group__input}
            type="password"
            name="cpassword"
          />
        </div>
        <div title="Signup button" className={styles.btns}>
          <Button extraClass={styles.signup} handler={(e: Event) => signUp(e, { name, username, email, password, confirmPassword })}>
            Sign Up
          </Button>
          <div className={styles.switch}>
            {creatingAccount ? 'Already have an account?' : 'No account? No problem!'}{' '}
            <span onClick={switchHandler} className={styles.switch_btn}>
              Sign in
            </span>{' '}
            here and lets get to work asap!
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
