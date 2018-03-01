import React, { Component } from 'react';
import Home from "../Pages/Home"
import Reviews from "../Pages/Reviews"
import News from "../Pages/News"
import HowToStart from "../Pages/HowToStart"
import {Route, Switch} from 'react-router-dom'

class Main extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/btc-to-eos" component={Home} />
					<Route path="/how-to-start" component={HowToStart} />
					<Route path="/reviews" component={Reviews} />
					<Route path="/news" component={News} />
					<Route render={() => <h1 className="container text-center">Page not found</h1>}/>
				</Switch>				
			</div>
		);
	}
}

export default Main