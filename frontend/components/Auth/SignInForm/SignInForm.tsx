import React, { useContext, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext/Auth.context';

import styles from './SignInForm.module.scss';

// Components
import { Button } from '../../Button/Button';

interface Props {
  creatingAccount: boolean;
  switchHandler: () => void;
}

const SignInForm: React.FC<Props> = ({ creatingAccount, switchHandler }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isCompany, setIsCompany] = useState<boolean>(false);

  const { signIn } = useContext(AuthContext);

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="email">
            Email
          </label>
          <input className={styles.group__input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" />
        </div>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.group__input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <div className={styles.btns}>
          <Button extraClass={styles.signup} handler={(e: Event) => signIn(e, { email, password }, isCompany)}>
            Sign In
          </Button>
          <div className={styles.switch}>
            {creatingAccount ? 'Already have an account?' : 'No account? No problem!'}{' '}
            <span onClick={switchHandler} className={styles.switch_btn}>
              {creatingAccount ? 'Sign in' : 'Sign up'}
            </span>{' '}
            here and lets get to work asap!
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
