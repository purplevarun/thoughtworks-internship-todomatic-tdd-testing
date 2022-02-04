import React, { useEffect, useState } from "react";
import "./SavedNotes.css";

const SavedNotes = ({ allNotes, setAllNotes }) => {
	const [DISPLAY, setDISPLAY] = useState("block");
	return (
		<div className="saved-notes" style={{ display: DISPLAY }}>
			<h2>Your Saved Notes :-</h2>
			<div style={{ width: "100%", height: "0px" }}></div>
			{allNotes.map((note, idx) => {
				return (
					<li style={{ listStyleType: "none" }} key={idx}>
						{note}
					</li>
				);
			})}
		</div>
	);
};

export default SavedNotes;
