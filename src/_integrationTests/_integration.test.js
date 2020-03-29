import moxios from "moxios";
import { testStore } from "../utils";
import { actions } from "../redux/reducers";

const { fetchPosts } = actions;

describe("fetch posts action", () => {
	beforeEach(() => {
		moxios.install();
	});
	afterEach(() => {
		moxios.uninstall();
	});

	it("updates store correctly", () => {
		const expectedState = [
			{
				title: "title 1",
				body: "body"
			}
		];

		const store = testStore();

		moxios.wait(() => {
			const request = moxios.requests.mostRecent();
			request.respondWith({
				status: 200,
				response: expectedState
			});
		});

		return store.dispatch(fetchPosts()).then(() => {
			const newState = store.getState();
			expect(newState.posts).toBe(expectedState);
		});
	});
});
