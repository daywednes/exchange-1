import React, { Component } from 'react';
import store from "../store"
import {Provider} from "react-redux"
//import LoginForm from "./Auth/LoginForm"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Main from "./Layout/Main"

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}
