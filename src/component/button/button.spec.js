import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../utils";

import SharedButton from "./button";

describe("SharedButton component", () => {
	describe("checking PropTypes", () => {
		it("doesn't throw a warning", () => {
			const fakeProps = {
				text: "fake button text",
				emitEvent: () => {}
			};
			expect(checkProps(SharedButton, fakeProps)).toBeUndefined();
		});
	});

	describe("Renders", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				text: "Fake text",
				emitEvent: () => {}
			};
			wrapper = shallow(<SharedButton {...props} />);
		});
		it("renders a button", () => {
			const button = findByTestAttr(wrapper, "Button");
			expect(button.length).toBe(1);
		});
	});
});
