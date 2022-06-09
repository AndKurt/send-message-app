import React from 'react';
import { AccordeonMessages, LoginForm, SendMessageForm } from '../../components';
import { useAppSelector } from '../../redux/hooks';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  const { name } = useAppSelector((state) => state.userReducer);

  return (
    <main className={styles.homePage}>
      {!name ? (
        <>
          <h1>Send message app</h1>
          <LoginForm />
        </>
      ) : (
        <>
          <SendMessageForm />
          <AccordeonMessages />
        </>
      )}
    </main>
  );
};
