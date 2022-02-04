import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SavedNotes from "./../components/SavedNotes";

var allNotes = ["initial note", "another note"];
const setAllNotes = (newNotes) => {
	allNotes = newNotes;
};
const newNote = "new test note";
const newNotes = [...allNotes, newNote];
describe("checking if notes are getting saved", () => {
	it("check saved notes display property is none when empty", async () => {
		const savedNotes = render(
			<SavedNotes allNotes={[]} setAllNotes={setAllNotes} />
		);
		expect(savedNotes.getByTestId("parent")).toHaveAttribute(
			"style",
			"display: none;"
		);
	});

	it("check saved notes display property is none when empty", async () => {
		const savedNotes = render(
			<SavedNotes allNotes={allNotes} setAllNotes={setAllNotes} />
		);
		expect(savedNotes.getByTestId("parent")).toHaveAttribute(
			"style",
			"display: block;"
		);
	});
});
