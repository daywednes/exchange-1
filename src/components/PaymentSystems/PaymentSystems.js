import React, { Component } from 'react';

class PaymentSystems extends Component {
	render() {
		return (
		    <div className="row">
		        <div className="col-md-6 col-sm-6">
		            <h4 className="mt0">Отправить </h4>
		            <div className="amount-container">
		            	<input type="text" name="amount-bar" placeholder="Сумма к отправке" className="amount-input" />
		            	<button className="btn btn-default amount-btn" type="button"> 
		            		<img src="assets/img/bitcoin.png" className="amount-btn-icon" />
		            	</button>
		            </div>
		            <h5 className="choose-payment-system">Choose Payment System</h5>
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
		        </div>
		        <div className="col-md-6 col-sm-6">
		            <h4 className="mt0">Получить </h4>
		            <div className="amount-container">
		            	<input type="text" name="amount-bar" placeholder="Сумма к получению" className="amount-input" />
		            	<button className="btn btn-default amount-btn" type="button"> 
		            		<img src="assets/img/bitcoin.png" className="amount-btn-icon" />
		            	</button>
		            </div>
		            <h5 className="choose-payment-system">Choose Payment System</h5>
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
		        </div>
		    </div>
		);
	}
}

export default PaymentSystems