import "./bootstrap.min.css";
import "./App.css";
import NoteArea from "./components/NoteArea";
import SavedNotes from "./components/SavedNotes";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
	const [allNotes, setAllNotes] = useState([]);
	return (
		<div className="App">
			<NoteArea allNotes={allNotes} setAllNotes={setAllNotes} />
			<div className="gap"></div>
			<SavedNotes allNotes={allNotes} setAllNotes={setAllNotes} />
		</div>
	);
}

export default App;
