import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {setAmountCrypto} from '../../AC/exchangeInfo'

class Amount extends Component {

	static propTypes = {
        //from connect
        paymentSystemsMap: PropTypes.object.isRequired,
        selected_from: PropTypes.number,
        selected_to: PropTypes.number,
        // from attrs
        type: PropTypes.string.isRequired,
	}

    state = {
        amount: ''
    }


	render() {
		const {paymentSystemsMap, selected_from, selected_to, type} = this.props
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

	    this.setState({
	      [name]: value
	    }, () => {
			this.props.setAmountCrypto(value, this.props.type)
	    });
    }
}

export default connect((state) => {
	return {
        paymentSystemsMap: state.paymentSystems.entities,
		selected_from: state.exchangeInfo.selected_from,
		selected_to: state.exchangeInfo.selected_to
	}
}, { setAmountCrypto })(Amount)
