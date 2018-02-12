import React, { Component } from 'react';
import PaymentSystems from '../PaymentSystems/PaymentSystems'

class Home extends Component {
	render() {
		return (
			<div>
			    <div className="container">
			        <div className="row main-info-flex">
			            <div className="col-md-7 col-md-offset-0 exchange-info">
			            	<PaymentSystems />
			            </div>
			            <div className="col-md-5 details-info">
			                <h4 className="mt0">Details </h4>
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
			        </div>
			        <div className="row">
			            <div className="col-md-6">
			                <div className="page-header">
			                    <h3>Reviews<button className="btn btn-primary write-review" type="button">Write a review</button></h3>
			                </div>
			                <div className="media">
			                    <div className="media-body">
			                        <h4 className="media-heading">Love this!</h4>
			                        <div><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i></div>
			                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus nisl ac diam feugiat, non vestibulum libero posuere. Vivamus pharetra leo non nulla egestas, nec malesuada orci finibus. </p>
			                        <p><span className="reviewer-name"><strong>John Doe</strong></span><span className="review-date">7 Oct 2015</span></p>
			                    </div>
			                </div>
			                <div className="media">
			                    <div className="media-body">
			                        <h4 className="media-heading">Fantastic product</h4>
			                        <div><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
			                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis maximus nisl ac diam feugiat, non vestibulum libero posuere. Vivamus pharetra leo non nulla egestas, nec malesuada orci finibus. </p>
			                        <p><span className="reviewer-name"><strong>Jane Doe</strong></span><span className="review-date">7 Oct 2015</span></p>
			                    </div>
			                </div>
			            </div>
			            <div className="col-md-6">
			                <div className="page-header">
			                    <h3>News </h3>
			                </div>
			                <ul className="thread-list">
			                    <li className="thread"><span className="time">Apr 21</span><span className="title">Maecenas finibus est nec pretium molestie. </span></li>
			                    <li className="thread"><span className="time">Apr 20</span><span className="title">Curabitur consectetur velit pharetra ex eleifend tempor. </span></li>
			                    <li className="thread"><span className="time">Apr 20</span><span className="title">Fusce iaculis ligula at nisl mollis suscipit. </span></li>
			                    <li className="thread"><span className="time">Apr 18</span><span className="title">Pellentesque tempus augue id risus lacinia vehicula. </span></li>
			                    <li className="thread"><span className="time">Apr 17</span><span className="title">Quisque lacinia massa non ex lobortis congue. </span></li>
			                </ul>
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

export default Home