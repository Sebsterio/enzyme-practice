import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/reducers";
import { middlewares } from "../redux/store";

export const findByTestAttr = (component, attr) =>
	component.find(`[data-test='${attr}']`);

export const checkProps = (component, fakeProps) =>
	checkPropTypes(component.propTypes, fakeProps, "prop", component.name);

export const testStore = initialState => {
	const createStoreWithMiddleware = applyMiddleware(...middlewares)(
		createStore
	);
	return createStoreWithMiddleware(rootReducer, initialState);
};
