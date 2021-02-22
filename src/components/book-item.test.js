import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import BookItem from "./book-item";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let title = "Test";
let authors = ["TestAuthor", "Test2"];
let pages = 123;
let city = "City";
let country = "Country";
let year = 1930;
let id = 302;
const setup = (props = { title, authors, pages, city, country, year, id }) => {
	return shallow(<BookItem {...props} />);
};

const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[test-data="${val}"]`);
};

const findById = (wrapper, val) => {
	return wrapper.find(`[id="${val}"]`);
};

test("Test year tag render", () => {
	const wrapper = setup();
	const appComponent = findByTestAttr(wrapper, "year");
	expect(appComponent.length).toBe(1);
});

test("Test year tag by Id", () => {
	const wrapper = setup();
	const appComponent = findById(wrapper, "book-year");
	expect(appComponent.length).toBe(1);
});
