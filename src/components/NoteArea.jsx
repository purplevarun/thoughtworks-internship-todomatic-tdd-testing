import React from "react";
import "./NoteArea.css";
const NoteArea = () => {
	return (
		<div className="note-area">
			<textarea
				data-testid="notebox"
				id=""
				cols="40"
				rows="10"
			></textarea>

			{/* <div className="gapht"></div> */}

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
