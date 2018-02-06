import React, { Component } from 'react';
import { addNumber, increment, decrement, surprise } from '../actions/index';
import { connect } from 'react-redux';

class Counter extends Component {
	handleClick(type) {
		if (this.props.count == 7) {
			this.props.surprise();
		}
		if (type === "add") {
			this.props.addNumber(7);
		} else if (type === "increment") {
			this.props.increment();
		} else {
			this.props.decrement();
		}
	}

	render() {
		return(
			<div>
				{this.props.message}
				Count: {this.props.count}
				<button onClick={() => this.handleClick("add")} >Add 7!</button>
				<button onClick={() => this.handleClick("increment")} >+</button>
				<button onClick={() => this.handleClick("decrement")} >-</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return ({
		count: state.count,
		message: state.surprise
	});
};

export default connect(mapStateToProps, { addNumber, increment, decrement, surprise	})(Counter);