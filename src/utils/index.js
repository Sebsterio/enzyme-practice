import checkPropTypes from "check-prop-types";

export const findByTestAttr = (component, attr) =>
	component.find(`[data-test='${attr}']`);

export const checkProps = (component, fakeProps) =>
	checkPropTypes(component.propTypes, fakeProps, "prop", component.name);
