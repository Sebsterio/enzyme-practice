import React from "react";
import { shallow } from "enzyme";
import Header from "./header";
import { findByTestAttr } from "../../utils";

const setUp = (props = {}) => shallow(<Header {...props} />);

describe("Header component", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it("renders without errors", () => {
		const wrapper = findByTestAttr(component, "headerComponent");
		expect(wrapper.length).toBe(1);
	});

	it("renders the logo", () => {
		const wrapper = findByTestAttr(component, "logoIMG");
		expect(wrapper.length).toBe(1);
	});
});
