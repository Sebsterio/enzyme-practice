import React from "react";
import { shallow } from "enzyme";
import checkPropTypes from "check-prop-types";
import Headline from "./headline";

import { findByTestAttr } from "../../utils";
import { checkProps } from "../../utils";

const setUp = props => shallow(<Headline {...props} />);

describe("Headline component", () => {
	//
	describe("Checking prop types", () => {
		it("doesn't throw a warning", () => {
			const fakeProps = {
				header: "hola",
				desc: "aloha"
			};
			expect(checkProps(Headline, fakeProps)).toBe(undefined);
		});
	});

	describe("Have props", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp({ header: "Header", desc: "Desc" });
		});

		it("renders without errors", () => {
			const component = findByTestAttr(wrapper, "Headline");
			expect(component.length).toBe(1);
		});

		it("renders header", () => {
			const component = findByTestAttr(wrapper, "header");
			expect(component.length).toBe(1);
		});

		it("renders desc", () => {
			const component = findByTestAttr(wrapper, "desc");
			expect(component.length).toBe(1);
		});
	});

	describe("Have no props", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp();
		});

		it("doesn't render", () => {
			const component = findByTestAttr(wrapper, "Headline");
			expect(component.length).toBe(0);
		});
	});
});
