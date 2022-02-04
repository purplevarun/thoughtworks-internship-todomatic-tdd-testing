import "./bootstrap.min.css";
import "./App.css";
import NoteArea from "./components/NoteArea";
import SavedNotes from "./components/SavedNotes";
function App() {
	return (
		<div className="App">
			<NoteArea />
			<div className="gap"></div>
			<SavedNotes />
		</div>
	);
}

export default App;
