import styles from './SignInForm.module.scss';

// Components
import { Button } from '../../Button/Button';

interface Props {
  creatingAccount: Boolean;
  handler: any;
  switchHandler: any;
}

const SignInForm: React.FC<Props> = ({
  creatingAccount,
  handler,
  switchHandler,
}) => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="email">
            Email
          </label>
          <input className={styles.group__input} type="email" name="email" />
        </div>
        <div className={styles.group}>
          <label className={styles.group__label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.group__input}
            type="password"
            name="password"
          />
        </div>
        <div className={styles.btns}>
          <Button extraClass={styles.signup} handler={handler}>
            Sign In
          </Button>
          <div className={styles.switch}>
            {creatingAccount
              ? 'Already have an account?'
              : 'No account? No problem!'}{' '}
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
