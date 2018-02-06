import React, { Component } from 'react';
import store from "../store"
import {Provider} from "react-redux"
import LoginForm from "./Auth/LoginForm"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <LoginForm />
        </div>
      </Provider>
    );
  }
}
