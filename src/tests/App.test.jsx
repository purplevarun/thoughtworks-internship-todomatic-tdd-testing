import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import NoteArea from "./../components/NoteArea";

describe("text area tests", () => {
	it("should be empty initially", () => {
		const noteArea = render(<NoteArea />);
		const textArea = noteArea.getByTestId("notebox");
		expect(textArea.value).toBe("");
	});
	it("should change it's value on text input", () => {
		const newNote = "hello world";
		const noteArea = render(<NoteArea />);
		const textArea = noteArea.getByTestId("notebox");
		fireEvent.change(textArea, { target: { value: newNote } }); // using firevent to put text inside the textarea box
		expect(textArea.value).toBe(newNote);
	});
	it("should clear textarea after submit button has been clicked", () => {});
});
