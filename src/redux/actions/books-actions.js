import { GET_BOOKS, FAIL, LOADING } from "../reducer/books-reducer";
import axios from "axios";

const getBooks = books => {
	return { type: GET_BOOKS, payload: books };
};
export const booksActions = (page, itemsPerPage, filter) => dispatch => {
	dispatch({ type: LOADING, payload: true });
	axios
		.post(
			`http://nyx.vima.ekt.gr:3000/api/books?page=${page}&itemsPerPag=${itemsPerPage}&filters=${filter}`
		)
		.then(response => {
			dispatch({ type: GET_BOOKS, payload: response.data });
			dispatch({ type: LOADING, payload: false });
		})
		.catch(err => {
			dispatch({ type: FAIL, payload: true });
		});
};
