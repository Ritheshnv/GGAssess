import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "react-router-dom";
import { GET_PAGE_NUMBER } from "../redux/reducer/books-reducer";
import { booksActions } from "../redux/actions/books-actions";

const BooksPagination = ({ booksCount, booksPerPage }) => {
	const dispatch = useDispatch();
	const BOOKS_PER_PAGE = 20;
	const booksData = useSelector(state => state.books);
	const changeHandler = e => {
		let baseUrl = e.target.baseURI;
		let pageNumber = baseUrl.split("/").slice(-1)[0];
		localStorage.setItem("bookPageNumber", pageNumber);
		dispatch({ type: GET_PAGE_NUMBER, payload: pageNumber });
		dispatch(booksActions(pageNumber, BOOKS_PER_PAGE, []));
	};

	return (
		<Pagination
			className="paginationClass"
			count={Math.ceil(booksCount / booksPerPage)}
			variant="outlined"
			page={
				booksData && booksData.pageNumber
					? booksData.pageNumber
					: window.location.pathname === "/"
					? 1
					: parseInt(localStorage.getItem("bookPageNumber"))
			}
			shape="rounded"
			onClick={e => changeHandler(e)}
			renderItem={item => {
				return (
					<PaginationItem
						type={"start-ellipsis"}
						test-data="pages"
						component={Link}
						to={`/${item.page}`}
						{...item}
					/>
				);
			}}
		/>
	);
};

export default BooksPagination;
