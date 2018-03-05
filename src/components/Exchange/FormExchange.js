import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createTransaction} from '../../AC/exchangeInfo'

class FormExchange extends Component {
    state = {
        Wallet: "",
        RefundWallet: ""
    }

	render() {
		const {cryptoTo, cryptoFrom} = this.props
		return (
			<div>

                <form onSubmit = {this.handleSubmit} className="bootstrap-form-with-validation">
                    <div className="form-group">
                    	<label className="control-label" htmlFor="Wallet">Your {cryptoTo.Symbol} address</label>
                    	<input className="form-control" value = {this.state.Wallet} onChange = {this.handleChange} name="Wallet" type="text" placeholder={cryptoTo.Symbol + " destination address"} />
                    </div>
                    <div className="form-group">
                        <label className="control-label" htmlFor="RefundWallet">Your {cryptoFrom.Symbol} address</label>
                        <input className="form-control" value = {this.state.RefundWallet} onChange = {this.handleChange} name="RefundWallet" type="text" placeholder={cryptoFrom.Symbol + " refund address"} />
                    </div>
                    <div className="form-group">
                        <div className="checkbox">
                        	<label className="control-label" htmlFor="checkbox-input">
	                        	<input type="checkbox" name="checkbox-input" />
	                        	I Agree with rules bla bla bla
                        	</label>
                       </div>
                    </div>

                    <button className="btn btn-primary" type="submit">Make exchange</button>	
                </form>

                				
			</div>
		);
	}

    handleSubmit = ev => {
        ev.preventDefault()

        const {cryptoTo, cryptoFrom} = this.props
        const {Wallet, RefundWallet} = this.state

        var transaction = {
        	CoinToID: cryptoTo.ID,
        	CoinFromID: cryptoFrom.ID,
        	Wallet,
        	RefundWallet
        }

        this.props.createTransaction(transaction)
    }

    handleChange = ev => {
        const target = ev.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({[name]: value});
    }
}

export default connect(null, { createTransaction })(FormExchange)