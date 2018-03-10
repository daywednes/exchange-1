import React, { Component } from 'react';
import store from "../store"
import {Provider} from "react-redux"
//import LoginForm from "./Auth/LoginForm"
import Header from "./Layout/Header"
import Footer from "./Layout/Footer"
import Main from "./Layout/Main"
import { BrowserRouter, StaticRouter } from 'react-router-dom'


class Router extends React.Component {
  renderRouter = () => {
    if(typeof window !== 'undefined') {
      return(
        <BrowserRouter>
          {this.props.children}
        </BrowserRouter>
      )
    } else {
      return(
        <StaticRouter location={this.props.path} context={{}}>
          {this.props.children}
        </StaticRouter>
      )
    }
  }

  render() {
    return(this.renderRouter())
  }
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router path={this.props.path}>
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
