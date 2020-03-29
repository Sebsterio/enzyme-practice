import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "../../utils";
import App from "./app";

const setUp = initialState => {
	const store = testStore(initialState);
	const wrapper = shallow(<App store={store} />)
		.childAt(0)
		.dive();
	console.log(wrapper.debug());
	return wrapper;
};

describe("App Component", () => {
	let wrapper;
	beforeEach(() => {
		const initialState = {
			posts: [
				{
					title: "fake title",
					body: "fake body"
				}
			]
		};
		wrapper = setUp(initialState);
	});

	it("renders without errors", () => {
		const component = findByTestAttr(wrapper, "App");
		expect(component.length).toBe(1);
	});

	test("hideButton method updates state", () => {
		const classInstance = wrapper.instance();
		classInstance.hideButton();
		expect(classInstance.state.btnHidden).toBe(true);
	});
});
