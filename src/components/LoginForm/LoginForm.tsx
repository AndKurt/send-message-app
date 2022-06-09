import React, { useState } from 'react';
import { Avatar, Box, Button, Container, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useAppDispatch } from '../../redux/hooks';
import { loginUserAsync } from '../../redux/actions/userAction';
//import io from 'socket.io-client';
import socket from '../../socket';

//const socket = io('http://localhost:5000');

export const LoginForm = () => {
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();
  //const connectionSocket = () => {
  //  io('http://localhost:5000');
  //};

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUserAsync(name));
    socket.emit('add-user', name);
    setName('');

    //connectionSocket();
  };

  return (
    <Container component="div" maxWidth="xs" sx={{ boxShadow: 3 }}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter your name
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            type="text"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
