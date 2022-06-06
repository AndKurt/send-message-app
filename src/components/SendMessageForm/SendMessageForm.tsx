import React, { useState } from 'react';
import { Box, Button, Container, TextField } from '@mui/material';
import { AutocompleteUserForm } from '..';
import { IUserData } from '../../interfaces';

export const SendMessageForm = () => {
  const [title, setTitle] = useState('');
  const [recipient, setRecipient] = useState<IUserData | null>(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(title, recipient?.recepient, message);

    setMessage('');
    setRecipient(null);
    setTitle('');
  };

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
            setRecipient={(recipient: IUserData | null) => setRecipient(recipient)}
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
    </Container>
  );
};
