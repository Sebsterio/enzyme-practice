import { combineReducers } from "redux";
import axios from "axios";

export const types = {
	GET_POSTS: "GET_POSTS"
};

export const actions = {
	fetchPosts: () => async dispatch => {
		await axios
			.get("https://jsonplaceholder.typicode.com/posts?_limit=10")
			.then(res => {
				dispatch({ type: types.GET_POSTS, payload: res.data });
			})
			.catch(err => console.log(err));
	}
};

export const postReducer = (state = [], action) => {
	switch (action.type) {
		case types.GET_POSTS:
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	posts: postReducer
});
