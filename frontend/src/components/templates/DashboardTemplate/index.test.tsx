import React from "react";
import { screen, render } from "@testing-library/react";
import DashboardTemplate from ".";
import { BrowserRouter } from "react-router-dom";

describe("DashboardTemplate", () => {
    it("renders the navbar, header, content, and footer", () => {
      const onClickAvatar = jest.fn();
      const { getByText } = render(
        <BrowserRouter>
          <DashboardTemplate
            leftContent={<h3></h3>}
            rightContent={<h3></h3>}
            onClickAvatar={onClickAvatar}
          />
        </BrowserRouter>
      );
      expect(screen.getByAltText("avatarImage")).toBeInTheDocument();
    });

      it("renders the DashboardTemplate component with provided content", () => {
        const leftContent = (
          <div data-testid="left-content">Left Content</div>
        );
        const rightContent = (
          <div data-testid="right-content">Right Content</div>
        );
        render(
          <BrowserRouter>
            <DashboardTemplate
              leftContent={leftContent}
              rightContent={rightContent}
              onClickAvatar={() => {}}
            />
          </BrowserRouter>
        );
        expect(screen.getByTestId("left-content")).toBeInTheDocument();
        expect(screen.getByTestId("right-content")).toBeInTheDocument();
      });
});
