const initialState = [];

export const GET_BOOKS = "GET_BOOKS";
export const SEARCH_BOOK = "SEARCH_BOOK";
export const GET_PAGE_NUMBER = "GET_PAGE_NUMBER";
export const FAIL = "FAIL";
export const LOADING = "LOADING";

const bookReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_BOOKS:
			return payload;
		case SEARCH_BOOK:
			return { ...state, searchKey: payload };
		case GET_PAGE_NUMBER:
			return { ...state, pageNumber: payload };
		case LOADING:
			return { ...state, loading: payload };
		case FAIL:
			return { ...state, error: payload };
		default:
			return state;
	}
};

export default bookReducer;
