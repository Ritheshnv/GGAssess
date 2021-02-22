import React from "react";
import { useDispatch } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { SEARCH_BOOK } from "../redux/reducer/books-reducer";

const SearchComponent = ({ books }) => {
	const dispatch = useDispatch();
	const handleChange = e => {
		dispatch({ type: SEARCH_BOOK, payload: e.target.value });
	};
	return (
		<div style={{ width: 300 }}>
			<Autocomplete
				freeSolo
				id="book-search"
				disableClearable
				options={books && books.map(book => book.book_title)}
				renderInput={params => {
					return (
						<TextField
							{...params}
							label="Search Books"
							margin="normal"
							variant="outlined"
							onChange={e => handleChange(e)}
						/>
					);
				}}
			/>
		</div>
	);
};

export default SearchComponent;
