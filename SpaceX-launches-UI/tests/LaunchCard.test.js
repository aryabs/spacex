import React from "react";
import { render, screen } from "@testing-library/react";
import LaunchCard from "../components/LaunchCard.js";

describe("LaunchCard Component", () => {
    const mockLaunch = {
        name: "CRS-26",
        date_utc: "2006-03-24T22:30:00.000Z",
        success: false,
        upcoming: false,
        details: "First flight with fairing 2.0. Will also carry two SpaceX test satellites for the upcoming Starlink constellation.",
        failures: [{ reason: "merlin engine failure" }],
        links: { patch: { small: "https://example.com/patch.png" } },
    };

    it("renders the launch name", () => {
        render(<LaunchCard launch={mockLaunch} />);
        expect(screen.getByText("CRS-26")).toBeInTheDocument();
    });

    it("renders the formatted date", () => {
        render(<LaunchCard launch={mockLaunch} />);
        expect(screen.getByText("Mar 24, 2006")).toBeInTheDocument();
    });

    it("renders the failure reason if the launch failed", () => {
        render(<LaunchCard launch={mockLaunch} />);
        expect(screen.getByText("First flight with fairing 2.0. Will also carry two SpaceX test satellites for the upcoming Starlink constellation.")).toBeInTheDocument();
    });

    it("renders the status as 'Failure'", () => {
        render(<LaunchCard launch={mockLaunch} />);
        expect(screen.getByText("Failed")).toBeInTheDocument();
    });

    it("renders the patch image", () => {
        render(<LaunchCard launch={mockLaunch} />);
        const image = screen.getByAltText("CRS-26");
        expect(image).toHaveAttribute("src", "https://example.com/patch.png");
    });
});