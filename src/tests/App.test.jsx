import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import NoteArea from "./../components/NoteArea";

describe("text area tests", () => {
	it("should be empty initially", () => {
		const noteArea = render(<NoteArea />);
		const textArea = noteArea.getByTestId("notebox");
		expect(textArea).toHaveTextContent("");
	});
	it("should change it's value on text input", () => {
		const noteArea = render(<NoteArea />);
	});
});
