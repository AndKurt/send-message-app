import io from 'socket.io-client';
import { BASE_URL } from './constants';

const socket = io('http://localhost:5000');
//const socket = io();
//const socket = io(BASE_URL);

export default socket;
