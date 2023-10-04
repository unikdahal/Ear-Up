import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Component", () => {
    test("Should load contact us Component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
    });

    test("Should load button inside contact Component", () => {
        render(<Contact />);

        const button = screen.getByText("Submit");

        expect(button).toBeInTheDocument();
    });

    test("Should load two input boxes inside contact Component", () => {
            render(<Contact />);

            const inputBoxes = screen.getAllByRole("textbox");

            //Assertion
            expect(inputBoxes.length).toBe(3);
    });
});


//Instead of Test we can use IT