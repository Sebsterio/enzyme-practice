import React, { Component } from "react";
import PropTypes from "prop-types";

class ListItem extends Component {
	state = {};
	render() {
		const { title, desc } = this.props;
		return (
			<div data-test="ListItem">
				<h1 data-test="title">{title}</h1>
				<p data-test="desc">{desc}</p>
			</div>
		);
	}
}

ListItem.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string
};

export default ListItem;
