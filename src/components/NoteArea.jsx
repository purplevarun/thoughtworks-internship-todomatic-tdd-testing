import React, { useState } from "react";
import "./NoteArea.css";
const NoteArea = ({ testNote }) => {
	const [newNote, setNewNote] = useState("");
	return (
		<div className="note-area">
			<textarea
				data-testid="notebox"
				id=""
				cols="40"
				rows="10"
				// value={testNote ? testNote : ""}
				onChange={(e) => setNewNote(e.target.value)}
			></textarea>

			<button
				className="btn btn-lg btn-warning submitbtn"
				data-testid="submitbtn"
			>
				Save this Note
			</button>
		</div>
	);
};

export default NoteArea;
