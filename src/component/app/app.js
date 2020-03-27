import React from "react";
import Header from "../header/header";
import Headline from "../headline/headline";
import "./app.scss";

function App() {
	return (
		<div className="App">
			<Header></Header>
			<main>
				<Headline header="Posts" desc="Click to display posts" />
			</main>
		</div>
	);
}

export default App;
