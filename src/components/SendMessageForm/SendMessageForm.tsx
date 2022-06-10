import React, { useEffect, useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { AutocompleteUserForm } from '..';
import { IUser } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { sendPostsAsync } from '../../redux/actions/postsActions';
import socket from '../../socket';
import { postsActions } from '../../redux/reducers/postsSlice';
import styles from './SendMessageForm.module.scss';

export const SendMessageForm = () => {
  const [title, setTitle] = useState('');
  const [recipient, setRecipient] = useState<IUser | null>(null);
  const [message, setMessage] = useState('');
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.userReducer);
  const { error } = useAppSelector((state) => state.postsRedicer);
  const { isNewPost } = postsActions;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      title: title,
      recepient: recipient?.name as string,
      sender: name,
      message: message,
    };

    if (recipient?.name === name) {
      dispatch(
        postsActions.addNewPostToList({
          title: data.title,
          recepient: data.recepient,
          sender: data.sender,
          message: data.message,
        })
      );
    }

    socket.emit('send-msg', data);

    dispatch(sendPostsAsync({ data }));
    if (data.title && data.recepient && data.message) {
      setMessage('');
      setRecipient(null);
      setTitle('');
    }
  };

  useEffect(() => {
    socket.on('msg-recieve', (msg) => {
      dispatch(
        postsActions.addNewPostToList({
          title: msg.data.title,
          recepient: msg.data.recepient,
          sender: msg.data.sender,
          message: msg.data.message,
        })
      );
      dispatch(isNewPost(true));
      setTimeout(() => {
        dispatch(isNewPost(false));
      }, 3000);
    });
  }, []);

  return (
    <Container component="div" maxWidth="xs" sx={{ boxShadow: 3, marginBottom: '30px' }}>
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 0 }}>
          <TextField
            margin="normal"
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={title}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <AutocompleteUserForm
            recipient={recipient}
            setRecipient={(recipient: IUser | null) => setRecipient(recipient)}
          />
          <TextField
            margin="normal"
            placeholder="Text your message"
            fullWidth
            id="message"
            name="message"
            value={message}
            multiline
            minRows={3}
            maxRows={10}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} color="success">
            send message
          </Button>
        </Box>
      </Box>
      {error && <p className={styles.error}>All fields must be filled</p>}
    </Container>
  );
};
