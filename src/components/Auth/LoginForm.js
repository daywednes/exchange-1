import React, { Component } from 'react';
import {connect} from "react-redux"
import {login} from "../../AC"

class LoginForm extends Component {
	state = {
		email: "",
		password: ""
	}

	render() {
		return (
			<div>	
				<form  onSubmit={this.handleSubmit}>
			        <h3>Auth</h3>
			        <label>Enter email</label><br />
			        <input type="email" name="email" onChange={this.changeForm} value={this.state.email} /> <br /><br />
			        <label>Enter password</label><br />
			        <input type="password" name="password" onChange={this.changeForm} value={this.state.password} /><br /><br />
			        <input type="submit" name="login" value="Login" />
			        <input type="submit" name="registration" value="Registration" /><br />        
    			</form>
			</div>
		);
	}

	handleSubmit = (ev) => {
		ev.preventDefault()
		const {email, password} = this.state
		this.props.login({email, password})
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

export default connect(null,
	{ login }
)(LoginForm)