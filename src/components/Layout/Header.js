import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
			    <div className="container">
			        <div className="navbar-header"><a className="navbar-brand" href="#">XcoinMAN </a><button className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button></div>
			        <div
			            className="collapse navbar-collapse" id="navcol-1">
			            <ul className="nav navbar-nav">
			                <li role="presentation"><a href="#">How to start</a></li>
			                <li role="presentation"><a href="#">Reviews </a></li>
			                <li role="presentation"><a href="#">News </a></li>
			            </ul><button className="btn btn-info navbar-btn navbar-right" type="button"><strong>SIGN UP</strong></button><button className="btn btn-primary navbar-btn navbar-right" type="button"><strong>SIGN IN</strong></button></div>
			    </div>
			</nav>
		);
	}
}

export default Header