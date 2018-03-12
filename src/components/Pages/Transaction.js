import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {redirectToTransactionFinished} from '../../AC/exchangeInfo'

class Transaction extends Component {

	state = {
		transactionData: {}
	}

    componentDidMount() {
        const {match: {id}, transactionData} = this.props

        if (transactionData.ID) {
        	this.setState({transactionData: transactionData})
        	this.props.redirectToTransactionFinished()
        }
    }

	render() {
		return (
			<div>
				{this.state.transactionData.ID}
			</div>
		);
	}
}

export default connect((state) => {
	return {
		transactionData: state.exchangeInfo.transactionData
	}
}, { redirectToTransactionFinished })(Transaction)