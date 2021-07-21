import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';
import AppStackEntry from './src/config/router';
const App = () => {
  return (
    <Provider store={store}>
      <AppStackEntry />
    </Provider>
  );
};

export default App;
