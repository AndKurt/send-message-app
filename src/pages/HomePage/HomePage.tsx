import React from 'react';
import { AccordeonMessages, LoginForm, SendMessageForm } from '../../components';
import styles from './HomePage.module.scss';

export const HomePage = () => {
  return (
    <main className={styles.homePage}>
      {/*<>
        <h1>Send message app</h1>
        <LoginForm />
      </>*/}
      <>
        <SendMessageForm />
        <AccordeonMessages />
      </>
    </main>
  );
};
