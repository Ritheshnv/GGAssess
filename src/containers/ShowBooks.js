import React from "react";
import { booksActions } from "../redux/actions/books-actions";
import { connect } from "react-redux";
import Books from "./Books";

class ShowBooks extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Books />;
	}
}

const mapStateToProps = state => ({
	payload: state.payload
});

const mapDispatchToProps = dispatch => ({
	setBooks: dispatch(booksActions())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowBooks);
