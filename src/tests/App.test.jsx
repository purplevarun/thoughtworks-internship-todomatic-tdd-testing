import { fireEvent, render } from "@testing-library/react";
import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import App from "../App";
describe("app has todoapp component or not", () => {
	it("should have a div", () => {
		const app = render(<App />).getByTestId("clickbtn");
		fireEvent.click(app);
	});
});
