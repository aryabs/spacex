import { render, screen } from "@testing-library/react";
import Home from "../pages/index.js";

describe("Home Page", () => {
    it("renders the header", () => {
        render(<Home />);
        expect(screen.getByText("🚀 SpaceX Launch Tracker")).toBeInTheDocument();
    });

    it("renders the pagination component", () => {
        render(<Home />);
        expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
});