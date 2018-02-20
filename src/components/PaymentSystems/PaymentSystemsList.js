import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import toggleActive from '../../decorators/toggleActive'
import {toggleActiveCrypto, setAmountCrypto} from '../../AC/exchangeInfo'

class PaymentSystemsList extends Component {
	static propTypes = {
        //from connect
        selected_from: PropTypes.number,
        selected_to: PropTypes.number,
        toggleActiveCrypto: PropTypes.func.isRequired,
        // from attrs
        type: PropTypes.string.isRequired,
        list: PropTypes.array.isRequired
	}

	render() {
		const {list, type, activeItemId} = this.props

		const paymentSystems = list.map(paymentSystem => {
			const pic = "https://shapeshift.io/images/coins/" + paymentSystem.Name.toLowerCase() + ".png"
			return (
	        	<button className={this.getClassName(paymentSystem.ID)} disabled={this.getDisabled(paymentSystem.ID)} type="button" key={paymentSystem.ID} onClick={this.toggleClick(paymentSystem.ID, type)}>
	        		<i className="icon ion-android-arrow-forward pull-right"></i>
	        		<img src={pic} />
	        		{paymentSystem.Name}
	        	</button>
			)
		})

		return (
			<div>
            	{paymentSystems}
			</div>
		);
	}

	toggleClick = (id, type) => ev =>  {
		this.props.toggleActiveCrypto(id, type)
	}

	getClassName(paymentSystemID) {
		const {type} = this.props
		var classes = ["btn", "btn-link", "border-pretty"]
		if (paymentSystemID == this.props["selected_" + type]) classes.push("btn-active")
		return classes.join(" ")
	}

	getDisabled(paymentSystemID) {
		const {type} = this.props
		var anti_type = type == "from" ? "to" : "from"
		return paymentSystemID == this.props["selected_" + anti_type]
	}
}

export default connect((state) => {
	return {
		selected_from: state.exchangeInfo.selected_from,
		selected_to: state.exchangeInfo.selected_to
	}
}, { toggleActiveCrypto, setAmountCrypto })(PaymentSystemsList)