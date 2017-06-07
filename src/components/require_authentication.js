import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function(ComposedComponent) {
	class Authentication extends Component {
		// static contextTypes = {
		// 	router: React.PropTypes.object
		// }

		move(){
			console.log(this.props.authenticated)
			return <Redirect to="/cm-todo-react3" />
		}
		componentWillMount() {
			if (!this.props.authenticated) {
				this.move();
			}
			
		}
		componentWillUpdate(nextProps) {
			if (!nextProps.authenticated) {
				this.move();
			}
		}

		render() {
			
			return (
				<ComposedComponent {...this.props} />
			)
		}
	}

	function mapStateToProps(state) {
		return { authenticated: state.authenticated }
	}

	return connect(mapStateToProps)(Authentication);
}