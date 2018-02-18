import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {setAmountCrypto} from '../../AC/exchangeInfo'

class Amount extends Component {

	static propTypes = {
        //from connect
        paymentSystemsMap: PropTypes.object.isRequired,
        exchangeInfo: PropTypes.shape({
	        selected_from: PropTypes.number,
	        selected_to: PropTypes.number,
	        amount_from: PropTypes.string,
	        amount_to: PropTypes.string,
	        loaded_pair: PropTypes.bool.isRequired,
	        loading_pair: PropTypes.bool.isRequired,
	        rate: PropTypes.object.isRequired
        }).isRequired,
        // from attrs
        type: PropTypes.string.isRequired,
	}

    state = {
        amount: ''
    }

    componentWillReceiveProps(nextProps) {
		const {exchangeInfo, setAmountCrypto, type} = nextProps

		const antiType = type == "from" ? "to" : "from"

		if (
			type == "to" && 
			exchangeInfo.amount_from && 
			(
				exchangeInfo.rate.rate != this.props.exchangeInfo.rate.rate || 
				exchangeInfo.amount_from != this.props.exchangeInfo.amount_from
			)
		) {
			var value2 = exchangeInfo["amount_from"] * exchangeInfo.rate.rate
			this.changeAmount(value2+"")
		}

		// if (
		// 	type == "from" && 
		// 	exchangeInfo.amount_to && 
		// 	(
		// 		exchangeInfo.rate.rate != this.props.exchangeInfo.rate.rate || 
		// 		exchangeInfo.amount_to != this.props.exchangeInfo.amount_to
		// 	)
		// ) {
		// 	var value2 = exchangeInfo["amount_to"] * exchangeInfo.rate.rate
		// 	this.changeAmount(value2+"")
		// }

		// if (exchangeInfo["amount_" + type] !== this.props.exchangeInfo["amount_" + type]) {
		//     this.setState({
		//       amount: exchangeInfo["amount_" + type]
		//     })

		// 	if (exchangeInfo.rate.rate) {
		// 		var value2 = exchangeInfo["amount_" + type] * exchangeInfo.rate.rate
		// 		this.props.setAmountCrypto(value2 + "", antiType)
		// 	}
		// }


		// if (rate.rate) {
		// 	var value2 = value * rate.rate
		// 	this.props.setAmountCrypto(value2 + "", antiType)
		// }
    }

    shouldComponentUpdate(nextProps, nextState) {
    	const {exchangeInfo: {selected_from, selected_to, amount_from, amount_to, rate}} = nextProps

		console.log("---", "shouldComponentUpdate Function call")
        return (
        	// selected_from != this.props.exchangeInfo.selected_from ||
        	// selected_to != this.props.exchangeInfo.selected_to ||
        	amount_from != this.props.exchangeInfo.amount_from ||
        	amount_to != this.props.exchangeInfo.amount_to ||
        	(rate && rate.rate != this.props.exchangeInfo.rate.rate )
    	)
    }

	render() {
		const {exchangeInfo: {selected_from, selected_to}, paymentSystemsMap, type} = this.props
		var selected_id = type == "from" ? selected_from : selected_to
		if (selected_id) {
			var paymentSystem = paymentSystemsMap[selected_id]
			var pic = "https://shapeshift.io/images/coins/" + paymentSystem.Name.toLowerCase() + ".png"
		}
		return (
			<div>
	            <div className="amount-container">
	            	<input type="text" value = {this.state.amount} onChange = {this.handleChange} name="amount" placeholder="amount" className="amount-input" />
	            	<button className="btn btn-default amount-btn" type="button"> 
	            		<img src={pic} className="amount-btn-icon" />
	            	</button>
	            </div>
			</div>
		);
	}

    handleChange = ev => {
	    const target = ev.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;
	    this.changeAmount(value)
    }

    changeAmount(value) {
	    this.setState({
	      amount: value
	    }, () => {
	    	this.props.setAmountCrypto(value, this.props.type)
	    });    	
    }
}

export default connect((state) => {
	return {
        paymentSystemsMap: state.paymentSystems.entities,
		exchangeInfo: state.exchangeInfo
	}
}, { setAmountCrypto })(Amount)
