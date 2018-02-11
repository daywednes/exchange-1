import React, { Component } from 'react';
import {connect} from "react-redux"
import {login, logout} from "../../AC/Auth"

class LoginForm extends Component {
	state = {
		email: "",
		password: "",
		submitType: "login"
	}

	render() {
		const {system: {isAuthenticating, currentUser, errorMessage}} = this.props
		const currentUserName = currentUser ? currentUser["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"] : null
		let form = null

		if (currentUser) {
			form = <button onClick={this.handleLogout}>Logout</button>;
		} else {
			form = (
				<form  onSubmit={this.handleSubmit}>
					<label>Enter email</label><br />
					<input type="email" name="email" onChange={this.changeForm} value={this.state.email} /> <br /><br />
					<label>Enter password</label><br />
					<input type="password" name="password" onChange={this.changeForm} value={this.state.password} /><br /><br />
					<input type="submit" name="login" value="Login" onClick={this.handleButtonClick} />      
					<input type="submit" name="registration" value="Registration" onClick={this.handleButtonClick} /><br /> 
				</form>
			);
		}
		return (
			<div>	
				<h3>Auth {currentUserName}</h3>
				{form}
			</div>
		);
	}

	handleLogout = (ev) => {
		ev.preventDefault()
		this.props.logout()
	}

	handleSubmit = (ev) => {
		ev.preventDefault()
		const {email, password, submitType} = this.state
		switch (submitType) {
			case "login":
				this.props.login({email, password})
		}
	}

	handleButtonClick = (ev) => {
	    this.setState({
	      submitType: ev.target.name
	    });
	}	

	changeForm = (ev) => {
	    const target = ev.target;
	    const value = target.type === 'checkbox' ? target.checked : target.value;
	    const name = target.name;

	    this.setState({
	      [name]: value
	    });
	}	
}

export default connect((state) => ({
	system: state.system
}),{ login, logout })(LoginForm)