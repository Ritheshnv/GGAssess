import React from "react";
import { useDispatch } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "react-router-dom";
import { GET_PAGE_NUMBER } from "../redux/reducer/books-reducer";

const BooksPagination = ({ booksCount, booksPerPage, pageNumberFromBooks }) => {
	const dispatch = useDispatch();
	const changeHandler = e => {
		let baseUrl = e.target.baseURI;
		let pageNumber = baseUrl.split("/").slice(-1)[0];
		localStorage.setItem("bookPageNumber", pageNumber);
		dispatch({ type: GET_PAGE_NUMBER, payload: pageNumber });
	};

	return (
		<Pagination
			className="paginationClass"
			count={Math.ceil(booksCount / booksPerPage)}
			variant="outlined"
			page={parseInt(pageNumberFromBooks)}
			shape="rounded"
			onClick={e => changeHandler(e)}
			renderItem={item => {
				return (
					<PaginationItem
						type={"start-ellipsis"}
						test-data="pages"
						component={Link}
						to={`/GGAssess/${item.page}`}
						{...item}
					/>
				);
			}}
		/>
	);
};

export default BooksPagination;
