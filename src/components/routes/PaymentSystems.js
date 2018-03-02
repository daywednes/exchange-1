import React, { Component } from 'react';
import PaymentSystems from '../PaymentSystems/PaymentSystems'
import {Route} from "react-router-dom"

class Change extends Component {
	render() {
		return (
			<div>
				<Route path="/" exact component={PaymentSystems} />
				<Route path="/:currencyFrom(\w+)-to-:currencyTo(\w+)" render={this.getPaymentSystems} />
			</div>
		);
	}

	getPaymentSystems = ({match}) => {
		return <PaymentSystems {...match.params} />
	}
}

export  default Change