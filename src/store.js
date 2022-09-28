import { createStore } from "redux";

import cakeReducer from "./redux/cakeReducer";

const store = createStore(cakeReducer);

export default store;