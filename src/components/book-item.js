import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const useStyles = makeStyles(theme => ({
	listClass: {
		backgroundColor: "#EBEBEB",
		minHeight: "180px"
	},
	gridMargin: {
		margin: "10px"
	}
}));

const BookItem = ({ title, authors, city, country, year, id }) => {
	const classes = useStyles();

	return (
		<Grid item sm={6} md={4} key={id} className={classes.gridMargin}>
			<List className={classes.listClass}>
				<ListItem alignItems="flex-start">
					<Typography variant="body2">
						<strong>Title: </strong>
						{title}
					</Typography>
				</ListItem>
				<ListItem alignItems="flex-start">
					{authors &&
						authors.map((author, index) => (
							<Typography variant="body2" key={author + index}>
								<strong>Author(s): </strong> {author}
							</Typography>
						))}
				</ListItem>
				<ListItem alignItems="flex-start">
					<Typography variant="body2" id="book-year">
						<strong test-data="year">Year: </strong>
						{year}
					</Typography>
				</ListItem>
				<ListItem alignItems="flex-start">
					<Typography variant="body2">
						<strong>Place: </strong>
						{city + ", " + country}
					</Typography>
				</ListItem>
			</List>
		</Grid>
	);
};

export default BookItem;
