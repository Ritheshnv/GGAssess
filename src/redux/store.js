import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./reducer/root-reducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));

export const persistor = persistStore(store);

export default { store, persistor };
