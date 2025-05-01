import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "../components/Pagination.js";

describe("Pagination Component", () => {
    const mockOnChange = jest.fn();

    it("renders the correct page count", () => {
        render(<Pagination count={5} page={1} onChange={mockOnChange} />);
        expect(screen.getByText("1")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("calls onChange when a page number is clicked", () => {
        render(<Pagination count={5} page={1} onChange={mockOnChange} />);
        const nextPageButton = screen.getByText("2");
        fireEvent.click(nextPageButton);
        expect(mockOnChange).toHaveBeenCalled();
    });

    it("disables the previous button on the first page", () => {
        render(<Pagination count={5} page={1} onChange={mockOnChange} />);
        const prevButton = screen.getByLabelText("Go to previous page");
        expect(prevButton).toBeDisabled();
    });

    it("disables the next button on the last page", () => {
        render(<Pagination count={5} page={5} onChange={mockOnChange} />);
        const nextButton = screen.getByLabelText("Go to next page");
        expect(nextButton).toBeDisabled();
    });
});