import React from "react";
import PropTypes from "prop-types";

class Headline extends React.Component {
	state = {};
	render() {
		const { header, desc } = this.props;
		if (!header) return null;
		return (
			<div data-test="Headline">
				<h1 data-test="header">{header}</h1>
				<p data-test="desc">{desc}</p>
			</div>
		);
	}
}

Headline.propTypes = {
	header: PropTypes.string,
	desc: PropTypes.string
};

export default Headline;
