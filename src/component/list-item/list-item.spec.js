import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../utils";
import ListItem from "./list-item";

describe("ListItem component", () => {
	describe("Prop types", () => {
		it("Doesn't trow a warning", () => {
			const fakeProps = {
				title: "fake title",
				desc: "fake desc"
			};
			expect(checkProps(ListItem, fakeProps)).toBeUndefined();
		});
	});

	describe("renders", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				title: "title",
				desc: "desc"
			};
			wrapper = shallow(<ListItem {...props} />);
		});

		it("renders without error", () => {
			const component = findByTestAttr(wrapper, "ListItem");
			expect(component.length).toBe(1);
		});

		it("renders title", () => {
			const component = findByTestAttr(wrapper, "title");
			expect(component.length).toBe(1);
		});

		it("renders desc", () => {
			const component = findByTestAttr(wrapper, "desc");
			expect(component.length).toBe(1);
		});
	});
});
