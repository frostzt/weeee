import React, { useContext, useState } from 'react';
import AuthContext from '../../../contexts/AuthContext/Auth.context';

import styles from './SignInForm.module.scss';

// Components
import { Button } from '../../Button/Button';
import Checkbox from '../../../components/Checkbox/Checkbox';

interface Props {
  creatingAccount: boolean;
  switchHandler: () => void;
}

const SignInForm: React.FC<Props> = ({ switchHandler }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isCompany, setIsCompany] = useState<boolean>(false);

  const { signIn, signInCompany } = useContext(AuthContext);

  const handleChangeIsCompany = () => {
    setIsCompany((prev) => !prev);
  };

  const handleSignIn = (e: Event) => {
    if (isCompany) {
      signInCompany(e, { email, password }, true);
    } else {
      signIn(e, { email, password });
    }
  };

  const handleSignInUser = (e: Event) => {
    signIn(e, { email: 'tommy@weeee.com', password: 'LrQGQXX6@849436' });
  };

  const handleSignInCompany = (e: Event) => {
    setIsCompany(true);
    signInCompany(e, { email: 'maybegoogle@company.com', password: 'LrQGQXX6@849436' }, true);
  };

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
        <Checkbox
          className={styles.checkbox}
          label="Is this a company account?"
          name="companySignIn"
          currentState={isCompany}
          handler={handleChangeIsCompany}
        />
        <div className={styles.btns}>
          <div className={styles.btns__auth}>
            <Button extraClass={styles.signup} handler={handleSignIn}>
              Sign In
            </Button>
            <Button extraClass={styles.signup} handler={handleSignInUser}>
              Test User
            </Button>
            <Button extraClass={styles.signup} handler={handleSignInCompany}>
              Test Company
            </Button>
          </div>
          <div className={styles.switch}>
            No account? No problem!{' '}
            <span onClick={switchHandler} className={styles.switch_btn}>
              Sign up
            </span>{' '}
            here and lets get to work asap!
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
