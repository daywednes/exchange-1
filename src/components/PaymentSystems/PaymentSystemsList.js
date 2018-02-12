import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import toggleActive from '../../decorators/toggleActive'

class PaymentSystemsList extends Component {
	static propTypes = {
        //from toggleActive decorator
        activeItemId: PropTypes.number,
        toggleActiveItem: PropTypes.func.isRequired,
        // from attrs
        list: PropTypes.array.isRequired
	}

	render() {
		const {list, activeItemId, toggleActiveItem} = this.props

		const paymentSystems = list.map(paymentSystem => (
        	<button className={this.getClassName(paymentSystem.ID)} type="button" key={paymentSystem.ID} onClick={toggleActiveItem(paymentSystem.ID)}>
        		<i className="icon ion-android-arrow-forward pull-right"></i>
        		<img src="assets/img/bitcoin.png" />
        		{paymentSystem.Name}
        	</button>
		))

		return (
			<div>
            	{paymentSystems}
			</div>
		);
	}

	getClassName(paymentSystemID) {
		const {activeItemId} = this.props
		var classes = ["btn", "btn-link", "border-pretty"]
		if (paymentSystemID == activeItemId) classes.push("btn-active")
		return classes.join(" ")
	}
}

export default connect(null)(toggleActive(PaymentSystemsList))