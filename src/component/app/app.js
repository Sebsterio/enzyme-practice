import React, { Component } from "react";
import { connect } from "react-redux";

import { actions } from "../../redux/reducers";

import Header from "../header/header";
import Headline from "../headline/headline";
import SharedButton from "../button/button";
import ListItem from "../list-item/list-item";

import "./app.scss";

class App extends Component {
	constructor(props) {
		super(props);
		this.fetch = this.fetch.bind(this);
	}
	fetch() {
		this.props.fetchPosts();
	}
	render() {
		const { posts } = this.props;
		const configButton = {
			text: "Get posts",
			emitEvent: this.fetch
		};
		return (
			<div className="App" data-test="App">
				<Header></Header>
				<main>
					<Headline header="Posts" desc="Click to display posts" />
					<SharedButton {...configButton} />
					{!!posts && (
						<div className="posts">
							{posts.map((post, index) => (
								<ListItem key={index} title={post.title} desc={post.body} />
							))}
						</div>
					)}
				</main>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	posts: state.posts
});

export default connect(mapStateToProps, { fetchPosts: actions.fetchPosts })(
	App
);
