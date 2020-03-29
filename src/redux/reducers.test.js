import { types } from "./reducers";
import { postReducer } from "./reducers";

describe("Post reducer", () => {
	it("returns default state", () => {
		const defaultState = [];
		expect(postReducer(undefined, {})).toEqual(defaultState);
	});

	it("returns new state if receiving type", () => {
		const posts = [{ title: "1" }, { title: "2" }, { title: "3" }];
		const newState = postReducer(undefined, {
			type: types.GET_POSTS,
			payload: posts
		});
		expect(newState).toEqual(posts);
	});
});
