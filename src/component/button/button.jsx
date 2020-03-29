import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
	state = {};
	submitEvent() {
		if (this.props.emitEvent) this.props.emitEvent();
	}
	render() {
		const { text } = this.props;
		return (
			<button data-test="Button" onClick={this.submitEvent.bind(this)}>
				{text}
			</button>
		);
	}
}

SharedButton.propTypes = {
	text: PropTypes.string,
	emitEvent: PropTypes.func
};

export default SharedButton;
