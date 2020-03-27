import React from "react";
import { shallow } from "enzyme";
import Headline from "./headline";

import { findByTestAttr } from "../../utils";

const setUp = props => shallow(<Headline {...props} />);

describe("Headline component", () => {
	//
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
