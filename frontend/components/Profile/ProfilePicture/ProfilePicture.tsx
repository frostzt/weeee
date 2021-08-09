import Image from 'next/image';
import React, { Fragment } from 'react';

// Styling
import cx from 'classnames';
import styles from './ProfilePicture.module.scss';

interface Props {
  picture: string;
  extraClass?: string;
  isUpdating?: Boolean;
}

const ProfilePicture: React.FC<Props> = ({ picture, extraClass, isUpdating }) => {
  return (
    <div className={cx([styles.container, extraClass ? extraClass : null])}>
      <div className={styles.picture}>
        {picture === 'business' ? <Image src="/images/users/business-thought-catalog.jpg" layout="fill" /> : null}
        {picture === 'cat' ? <Image src="/images/users/cat-mikhail-vasilyev.jpg" layout="fill" /> : null}
        {picture === 'dog' ? <Image src="/images/users/dog-charles-deluvio.jpg" layout="fill" /> : null}
        {picture === 'gamer' ? <Image src="/images/users/gamer-gabriel-dias-pimenta.jpg" layout="fill" /> : null}
        {picture === 'nature' ? <Image src="/images/users/nature-laura-smetsers.jpg" layout="fill" /> : null}
        {picture === 'programming' ? <Image src="/images/users/programming-fotis-fotopoulos.jpg" layout="fill" /> : null}
      </div>
    </div>
  );
};

export default ProfilePicture;
