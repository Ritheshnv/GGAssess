import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Pagination from "./pagination";
import { Provider } from "react-redux";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => {
	let mockStore = {
		getState: () => ({
			books: [
				{
					book_author: ["Ανώνυμος"],
					book_pages: 104,
					book_publication_city: "Βενετία",
					book_publication_country: "Ιταλία",
					book_publication_year: 1529,
					book_title: "Ο Αλέξανδρος ο Μακεδών",
					id: 2086
				}
			],
			count: 2425,
			loading: false
		}),
		subscribe: jest.fn(),
		dispatch: jest.fn()
	};
	const mockFn = jest.fn();
	return shallow(
		<Provider store={mockStore}>
			<Pagination onClick={mockFn} />
		</Provider>
	);
};

const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[test-data="${val}"]`);
};

xit("Test Pagination component", () => {
	const wrapper = setup();
	const link = findByTestAttr(wrapper, "pages");
	link.simulate("click");
});
