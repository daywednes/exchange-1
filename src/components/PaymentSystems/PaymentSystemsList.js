import React, { Component } from 'react'
import {connect} from "react-redux"

class PaymentSystemsList extends Component {
	static propTypes = {
        //from button decorator
        activeItemId: PropTypes.string,
        toggleActiveItem: PropTypes.func.isRequired,
        // from attrs
        list: PropTypes.array.isRequired
	}

	render() {
		return (
			<div>
            	<button className="btn btn-link border-pretty" type="button">
            		<i className="icon ion-android-arrow-forward pull-right"></i>
            		<img src="assets/img/bitcoin.png" />
            		Bitcoin
            	</button>
            	<button className="btn btn-link border-pretty" type="button">
            		<i className="icon ion-android-arrow-forward pull-right"></i>
            		<img src="assets/img/bitcoin.png" />
            		Ethereum
            	</button>
			</div>
		);
	}
}

export default connect(null)(PaymentSystemsList)