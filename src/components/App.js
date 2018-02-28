import React, { Component } from 'react';
import store from "../store"
import {Provider} from "react-redux"
//import LoginForm from "./Auth/LoginForm"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Main from "./Layout/Main"
import {BrowserRouter as Router} from 'react-router-dom'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <Main />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
