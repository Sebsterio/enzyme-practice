import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const middlewares = [reduxThunk];

// export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(
// 	createStore
// );
// export default createStoreWithMiddleWare(rootReducer);

export default createStore(rootReducer, applyMiddleware(...middlewares));
