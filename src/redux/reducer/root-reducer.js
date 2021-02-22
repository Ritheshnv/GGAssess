import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import bookReducer from "./books-reducer";

const persistConfig = {
	key: "books",
	storage,
	whitelist: "books"
};

const rootReducer = combineReducers({
	books: bookReducer
});

export default persistReducer(persistConfig, rootReducer);
