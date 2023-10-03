import { render, screen, fireEvent } from "@testing-library/react";

import IconAtom from "."; 
import logOut from "/public/assets/icons/logout.png"; 

describe("IconAtom", () => {
  it("renders an image with correct attributes and responds to onClick", () => {
    const onClickMock = jest.fn(); 
    
    render(
      <IconAtom
        src={logOut}
        alt="image"
        width="32px"
        height="32px"
        onClick={onClickMock}
      />
    );
    
    const iconElement = screen.getByAltText("image");
    
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", logOut);
    expect(iconElement).toHaveAttribute("width", "32px");
    expect(iconElement).toHaveAttribute("height", "32px");
    
    fireEvent.click(iconElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});
