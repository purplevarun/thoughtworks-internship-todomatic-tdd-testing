import React, { useEffect, useRef, useState } from "react";
import "./NoteArea.css";

const NoteArea = ({ allNotes, setAllNotes }) => {
	const [newNote, setNewNote] = useState("");
	const textArea = useRef(null);

	const saveTheNewNote = () => {
		if (newNote.length > 0) setAllNotes([...allNotes, newNote]);
		textArea.current.value = "";
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
			<p style={{ display: "none" }} data-testid="compareNewNotes">
				{JSON.stringify(allNotes)}
			</p>
		</div>
	);
};

export default NoteArea;
