import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class Header extends Component {
	authButton() {
		if(!this.props.authenticated){
			return (
				<button onClick={() => this.props.authentication(true)}>Login</button>
			)
		} else {
			return (
				<button onClick={() => this.props.authentication(false)}>Logoff</button>
			)
		}
	}
	render() {
		return (
			<div>
				<Link to="/cm-todo-react3">Home</Link> &nbsp;
				<Link to="/cm-todo-react3/about">About</Link>  &nbsp;
				{this.authButton()}
				
				

			</div>
				
				
		)
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.authenticated
	}
}


export default connect(mapStateToProps, actions)(Header);