import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import {loadCryptoPair} from '../../AC/exchangeInfo'

class DetailsExchange extends Component {

	static propTypes = {
        //from connect
        exchangeInfo: PropTypes.shape({
	        selected_from: PropTypes.string,
	        selected_to: PropTypes.string,
	        amount_from: PropTypes.string,
	        amount_to: PropTypes.string,
	        loaded_pair: PropTypes.bool.isRequired,
	        loading_pair: PropTypes.bool.isRequired,
	        rate: PropTypes.object.isRequired
        }).isRequired,
        paymentSystemsMap: PropTypes.object.isRequired
	}

    componentWillReceiveProps(nextProps) {
		const {exchangeInfo: {selected_from, selected_to, loaded_pair, loading_pair}, paymentSystemsMap, loadCryptoPair} = nextProps

		if (loading_pair) return false

       	if (selected_from == this.props.exchangeInfo.selected_from &&
        	selected_to == this.props.exchangeInfo.selected_to) return false

        if (selected_from && selected_to) {
			var cryptoFrom = paymentSystemsMap[selected_from]
			var cryptoTo = paymentSystemsMap[selected_to]
        	loadCryptoPair(cryptoFrom.Symbol + "_" + cryptoTo.Symbol)
            // const url = selected_from.toLowerCase() + "-to-" + selected_to .toLowerCase()
            // window.history.pushState(url, url, '/' + url);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
    	const {exchangeInfo: {selected_from, selected_to, amount_from, amount_to, loaded_pair, loading_pair}, paymentSystemsMap} = nextProps

		console.log("---", "shouldComponentUpdate Function call")
        return (selected_from != this.props.exchangeInfo.selected_from ||
        	selected_to != this.props.exchangeInfo.selected_to ||
        	amount_from != this.props.exchangeInfo.amount_from ||
        	amount_to != this.props.exchangeInfo.amount_to ||
        	loaded_pair != this.props.exchangeInfo.loaded_pair ||
        	loading_pair != this.props.exchangeInfo.loading_pair 
    	)
    }

	render() {
		return (
			<div>
				{this.getBody()}
			</div>
		);
	}

	getBody() {
		const {exchangeInfo: {selected_from, selected_to, amount_from, amount_to}, paymentSystemsMap, currencyFrom, currencyTo} = this.props
        if (currencyFrom && currencyTo) {
            var cryptoFrom = paymentSystemsMap[currencyFrom.toUpperCase()]
            var cryptoTo = paymentSystemsMap[currencyTo.toUpperCase()]
            if (!cryptoFrom || !cryptoTo) return null
        } else {
            var cryptoFrom = paymentSystemsMap[selected_from]
            var cryptoTo = paymentSystemsMap[selected_to]
        }


		if (!cryptoFrom) {
			return (
				<div>
					Need to select From currency
				</div>
			)
		}

		if (!cryptoTo) {
			return (
				<div>
					Need to select To currency
				</div>
			)
		}

		return (
			<div>
                <h4 className="mt0">Details: </h4>
                <pre style={{wordWrap: "break-word", whiteSpace: "normal"}}>
                	{JSON.stringify(this.props.exchangeInfo)}
                </pre>
                <br />
                Pair: {cryptoFrom.Symbol}_{cryptoTo.Symbol}
                <form className="bootstrap-form-with-validation">
                    <div className="form-group">
                    	<label className="control-label" htmlFor="text-input">Text Input</label>
                    	<input className="form-control" type="text" name="text-input" id="text-input" />
                    </div>
                    <div className="form-group">
                    	<label className="control-label" htmlFor="email-input">Email Input</label>
                    	<input className="form-control" type="email" name="email-input" id="email-input" />
                    </div>
                    <div className="form-group">
                    	<label className="control-label" htmlFor="textarea-input">Textarea </label>
                    	<textarea className="form-control" name="textarea-input" id="textarea-input"></textarea>
                    </div>
                    <div className="form-group">
                    	<label className="control-label" htmlFor="search-input">Input Group</label>
                        <div className="input-group">
                        	<input className="form-control" type="search" name="search-input" id="search-input" />
                            <div className="input-group-addon">
                            	<span><i className="glyphicon glyphicon-bitcoin"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="checkbox">
                        	<label className="control-label" htmlFor="checkbox-input">
	                        	<input type="checkbox" name="checkbox-input" />
	                        	I Agree with rules bla bla bla
                        	</label>
                       </div>
                    </div>
                </form>

                <button className="btn btn-primary" type="button">Make exchange</button>

                <div className="form-group">
                	<label className="control-label details-info-attention">Details </label>
                    <p className="form-static-control">Attention! In regard with the instability of Bitcoin's exchange rate, the amount you receive will be recalculated at the new exchange rate, if more than 10 minutes have passed from the inception of your order to the receipt of funds
                        on our account. Making the order confirms acceptance of this condition and User agreement. </p>
                </div>				
			</div>
		)
	}
}

export default connect((state) => {
	return {
        paymentSystemsMap: state.paymentSystems.entities,
		exchangeInfo: state.exchangeInfo
	}
}, { loadCryptoPair })(DetailsExchange)