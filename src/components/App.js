import React, { Component } from 'react';
import store from "../store"
import {Provider} from "react-redux"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          Hello World
        </div>
      </Provider>
    );
  }
}
