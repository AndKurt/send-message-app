import React from 'react';
import { Provider } from 'react-redux';
import { Footer, Header, Router } from './components';
import { setupStore } from './redux/store';

//import io from 'socket.io-client';
//import { BASE_URL } from './constants';

//const socket = io(BASE_URL);

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Router />
      <Footer />
    </Provider>
  );
}

export default App;
