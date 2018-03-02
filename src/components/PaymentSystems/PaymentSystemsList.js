import React, { Component } from 'react'
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import toggleActive from '../../decorators/toggleActive'
import {toggleActiveCrypto, setAmountCrypto} from '../../AC/exchangeInfo'

class PaymentSystemsList extends Component {
	static propTypes = {
        //from connect
        selected_from: PropTypes.string,
        selected_to: PropTypes.string,
        toggleActiveCrypto: PropTypes.func.isRequired,
        loadedPaymentSystems: PropTypes.bool.isRequired,
        // from attrs
        type: PropTypes.string.isRequired,
        list: PropTypes.array.isRequired,
        selected: PropTypes.string
	}

    componentDidMount() {
        const {selected, type, loadedPaymentSystems} = this.props
		if (selected && loadedPaymentSystems) {
			this.props.toggleActiveCrypto(selected, type)
		}
    }

	render() {
		const {list, type, activeItemId} = this.props

		const paymentSystems = list.map(paymentSystem => {
			''
			return (
	        	<button className={this.getClassName(paymentSystem.Symbol)} disabled={this.getDisabled(paymentSystem.Symbol)} type="button" key={paymentSystem.Symbol} onClick={this.toggleClick(paymentSystem.Symbol, type)}>
	        		<i className="icon ion-android-arrow-forward pull-right"></i>
	        		<img src={paymentSystem.imageSmall.replace("jpeg", "png")} />
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

	toggleClick = (symbol, type) => ev =>  {
		this.props.toggleActiveCrypto(symbol, type)
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
		selected_to: state.exchangeInfo.selected_to,
        loadedPaymentSystems: state.paymentSystems.loaded
	}
}, { toggleActiveCrypto, setAmountCrypto })(PaymentSystemsList)