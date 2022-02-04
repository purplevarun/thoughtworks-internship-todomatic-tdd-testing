import React, { useEffect, useState } from "react";
import "./SavedNotes.css";

const SavedNotes = () => {
	const [DISPLAY, setDISPLAY] = useState("block");
	return (
		<div className="saved-notes" style={{ display: DISPLAY }}>
			<h2>Your Saved Notes :-</h2>
			<div style={{ width: "100%", height: "0px" }}></div>
			<button className="btn btn-sm btn-danger" onClick={() => {}}>
				Clear All Notes
			</button>
		</div>
	);
};

export default SavedNotes;
