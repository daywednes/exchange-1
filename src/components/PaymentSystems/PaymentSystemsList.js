import React, { Component } from 'react'
import {connect} from "react-redux"

class PaymentSystemsList extends Component {
	static propTypes = {
        //from button decorator
        activeItemId: PropTypes.string,
        toggleActiveItem: PropTypes.func.isRequired
	}

	render() {
		return (
			<div></div>
		);
	}
}

export default connect(null)(PaymentSystemsList)