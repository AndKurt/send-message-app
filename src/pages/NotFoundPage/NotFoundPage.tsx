import React from 'react';
import styles from './NotFoundPage.module.scss';
import notFoundImg from '../../assets/png/error.png';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <main className={styles.notFound}>
      <h4>Oooops...</h4>
      <h3>Something went wrong</h3>
      <div className={styles.imgContainer}>
        <img src={notFoundImg} alt="not-found" />
      </div>
      <p>
        Go to{' '}
        <Link className={styles.link} to="/">
          Home
        </Link>
      </p>
    </main>
  );
};
