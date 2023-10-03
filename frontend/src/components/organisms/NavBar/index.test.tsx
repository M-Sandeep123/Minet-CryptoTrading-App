import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavBar } from ".";
import { NavList } from "../../../constants";
import { MemoryRouter } from "react-router-dom"; 
jest.mock("@auth0/auth0-react", () => ({
  useAuth0: () => ({
    logout: jest.fn(),
  }),
}));

describe("NavBar component", () => {
  it("should render icons based on NavList", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const iconElements = screen.getAllByTestId("icon");

    expect(iconElements).toHaveLength(NavList.length);
  });

  it("should toggle icon state on click", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const iconElement = screen.getAllByTestId("icon")[0];
    expect(iconElement).toBeInTheDocument();
  });

  it("should navigate to / when the corresponding icon is clicked", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const dashboardIconElement = screen.getAllByTestId("icon")[1];
    fireEvent.click(dashboardIconElement);
    const altIconAtIndex1 = screen.getAllByTestId("icon")[1];
    expect(altIconAtIndex1.getAttribute("src")).toContain("test-file-stub");
  });

  it("should call logout when the last icon is clicked on navBar", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const lastIconElement = screen.getAllByTestId("icon")[NavList.length - 1];
    fireEvent.click(lastIconElement);
    expect(window.location.pathname).toBe("/");
  });
});
