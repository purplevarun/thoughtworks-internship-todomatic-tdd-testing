import { fireEvent, render } from "@testing-library/react";
import React from "react";
import App from "../App";
import "@testing-library/jest-dom/extend-expect";

describe("app has todoapp component or not", () => {
	it("should have a div", () => {
		const app = render(<App />);
		const btn = app.getByTestId("clickbtn");
		const val = app.getByTestId("valdiv");
		expect(val).toHaveTextContent(0);
		fireEvent.click(btn);
		expect(val).toHaveTextContent(1);
	});
});
