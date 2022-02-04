import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NoteArea from "./components/NoteArea";
import SavedNotes from "./components/SavedNotes";
function App() {
	const [value, setValue] = useState(0);
	return (
		<div className="App">
			<NoteArea />
			<div className="gap"></div>
			<SavedNotes />
		</div>
	);
}

export default App;
