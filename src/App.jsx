import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
	const [value, setValue] = useState(0);
	return (
		<div className="App">
			<button data-testid="clickbtn" onClick={() => setValue(value + 1)}>
				click me
			</button>
			<div style={{ width: "100%" }}></div>
			<h1 data-testid="valdiv">{value}</h1>
		</div>
	);
}

export default App;
