import React, { Component } from 'react';
import {connect} from 'react-redux'
import {filtratedPaymentSystemsSelector} from '../selectors'
import {loadAllPaymentSystems} from '../AC/PaymentSystems'
import PaymentSystemsList from '../PaymentSystemsList'
import Loader from './Loader'

class PaymentSystems extends Component {

	static propTypes = {
        //from connect
        paymentSystems: PropTypes.array.isRequired,
        loading: PropTypes.bool.isRequired,
        loaded: PropTypes.bool.isRequired,
        loadAllPaymentSystems: PropTypes.func.isRequired
	}

    componentDidMount() {
        const {loaded, loading, loadAllPaymentSystems} = this.props
        if (!loaded || !loading) loadAllPaymentSystems()
    }

	render() {
		const {loaded, loading, paymentSystems} = this.props

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
		            	<PaymentSystemsList list={paymentSystems} />
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
		            	<PaymentSystemsList list={paymentSystems} />
		        	</div>
		        </div>
		    </div>
		);
	}
}

export default connect((state) => {
    return {
        paymentSystems: filtratedPaymentSystemsSelector(state),
        loading: state.paymentSystems.loading,
        loaded: state.paymentSystems.loaded
    }
}, {loadAllPaymentSystems})(accordion(PaymentSystems))