import React from "react";
import { render } from "@testing-library/react";
import AvatarIcon from ".";

describe("AvatarIcon Component", () => {
  it("renders without errors", () => {
    const { container } = render(
      <AvatarIcon
        avatarSrc="avatar.jpg"
        avatarAlt="Avatar Alt Text"
        iconSrc="icon.png"
        iconAlt="Icon Alt Text"
      />
    );
    expect(container).toBeInTheDocument();
  });

  it("renders the avatar image with the correct alt text", () => {
    const { getByAltText } = render(
      <AvatarIcon
        avatarSrc="avatar.jpg"
        avatarAlt="Avatar Alt Text"
        iconSrc="icon.png"
        iconAlt="Icon Alt Text"
      />
    );
    expect(getByAltText("Avatar Alt Text")).toBeInTheDocument();
  });
});
