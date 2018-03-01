import React, { Component } from 'react';
import DetailsExchange from '../Exchange/DetailsExchange'
import {Route} from "react-router-dom"

class Change extends Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={DetailsExchange} />
				<Route path="/btc-to-eos" component={DetailsExchange} />
			</div>
		);
	}
}

export  default Change