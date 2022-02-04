import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import { shallow } from "enzyme";
import NoteArea from "./../components/NoteArea";

describe("text area tests", () => {
	it("should be empty initially", () => {
		const noteArea = render(<NoteArea />);
		const textArea = noteArea.getByTestId("notebox");
		expect(textArea).toHaveTextContent("");
	});
	it("should change it's value on text input", () => {
		const newNote = "hello world";
		const noteArea = shallow(<NoteArea />);
	});
	it("should clear textarea after submit button has been clicked", () => {});
});
