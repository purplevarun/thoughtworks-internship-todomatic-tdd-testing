import React, { useEffect, useRef, useState } from "react";
import "./NoteArea.css";
const NoteArea = ({ testNote }) => {
	const [newNote, setNewNote] = useState("");
	const [notesCollection, SetNotesCollection] = useState([]);
	const textArea = useRef(null);
	useEffect(() => {
		if (testNote) {
			textArea.current.innerHTML = "hello world";
		}
	});
	const saveTheNewNote = () => {
		if (newNote.length > 0) {
			SetNotesCollection([...notesCollection, newNote]);
		}
		localStorage.setItem("NOTES", notesCollection);
	};
	return (
		<div className="note-area">
			<textarea
				data-testid="notebox"
				id=""
				cols="40"
				rows="10"
				onChange={(e) => setNewNote(e.target.value)}
				ref={textArea}
			></textarea>

			<button
				className="btn btn-lg btn-warning submitbtn"
				data-testid="submitbtn"
				onClick={() => saveTheNewNote()}
			>
				Save this Note
			</button>
		</div>
	);
};

export default NoteArea;
