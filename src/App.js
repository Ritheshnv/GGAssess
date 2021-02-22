import "./App.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ShowBooks from "./containers/ShowBooks";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Switch>
						<Route path="/GGAssess" exact key="1" component={ShowBooks} />
						<Route path="/GGAssess/:pageNumber" key="2" component={ShowBooks} />
					</Switch>
				</header>
			</div>
		</BrowserRouter>
	);
}

export default App;
