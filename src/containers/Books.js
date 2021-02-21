import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import BookItem from "../components/book-item";
import Pagination from "../components/pagination";
import SearchComponent from "../components/search";
import { booksActions } from "../redux/actions/books-actions";
import Alert from "@material-ui/lab/Alert";
import { Grid } from "@material-ui/core/";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		flexDirection: "column",
		alignItems: "center"
	},
	bookComponent: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	gridClass: {
		display: "flex",
		marginLeft: "350px",
		flexDirection: "row",
		alignItems: "center"
	}
}));
const Books = ({}) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const BOOKS_PER_PAGE = 20;
	const booksData = useSelector(state => state.books);
	const loading = booksData.loading;
	const error = booksData.error;

	const pageNumber =
		booksData && booksData.pageNumber
			? booksData.pageNumber
			: window.location.pathname === "/"
			? 1
			: localStorage.getItem("bookPageNumber");

	useEffect(() => {
		dispatch(booksActions(pageNumber, BOOKS_PER_PAGE, []));
	}, []);

	useEffect(() => {
		window.scrollTo(0, 0);
		getBooks();
	}, [pageNumber]);

	const getBooks = async () => {
		await booksActions(pageNumber, BOOKS_PER_PAGE, []);
	};

	return (
		<div className={classes.root}>
			{error ? (
				<Alert severity="error">
					Problem loading the page, please make sure you are connected to
					internet. If problem persist please contact administrator.
				</Alert>
			) : (booksData && booksData.length < 1) || loading ? (
				<CircularProgress />
			) : (
				<div className={classes.bookComponent}>
					<Typography variant="h4">Book Shop</Typography>
					<SearchComponent books={booksData && booksData.books} />
					<Grid container spacing={2} className={classes.gridClass}>
						{booksData &&
							booksData.books.map(book => (
								<BookItem
									key={book.id}
									title={book.book_title}
									city={book.book_publication_city}
									country={book.book_publication_country}
									authors={book.book_author}
									year={book.book_publication_year}
									pages={book.book_pages}
									id={book.id}
								/>
							))}
					</Grid>
					<Pagination
						booksCount={booksData && booksData.count}
						booksPerPage={BOOKS_PER_PAGE}
					/>
				</div>
			)}
		</div>
	);
};

export default Books;
