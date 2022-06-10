import io from 'socket.io-client';
import { BASE_URL } from './constants';

const socket = io(BASE_URL, { transports: ['websocket'] });

export default socket;
