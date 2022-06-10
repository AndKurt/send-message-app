import clsx from 'clsx';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import styles from './NewMessage.module.scss';

export const NewMessage = () => {
  const { isNewPost, newPost } = useAppSelector((state) => state.postsRedicer);

  return (
    <div className={clsx(styles.newPost, isNewPost && styles.active)}>
      New message from: <span className={styles.bold}>{newPost?.sender}</span>
    </div>
  );
};
