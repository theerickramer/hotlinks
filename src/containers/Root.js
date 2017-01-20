import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from '../store/configStore';
import App from './App';

const store = configStore({ hotlinks: [] });

export default class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}