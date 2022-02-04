import React, { useEffect, useState } from "react";
import "./SavedNotes.css";

const SavedNotes = ({ allNotes, setAllNotes }) => {
	const [DISPLAY, setDISPLAY] = useState("none");
	useEffect(() => {
		setDISPLAY(allNotes.length > 0 ? "block" : "none");
	});
	return (
		<div
			className="saved-notes"
			data-testid="parent"
			style={{ display: DISPLAY }}
		>
			<h2>Your Saved Notes :-</h2>
			<div style={{ width: "100%", height: "0px" }}></div>
			<div data-testid="note-map">
				{allNotes.map((note, idx) => {
					return (
						<li
							style={{ listStyleType: "none" }}
							key={idx}
							data-testid="notes"
						>
							{note}
						</li>
					);
				})}
			</div>
		</div>
	);
};

export default SavedNotes;
