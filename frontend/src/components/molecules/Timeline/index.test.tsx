import React from "react";
import { render } from "@testing-library/react";
import Timeline, { TimelineProps } from "../Timeline";
import { timeLineData } from "../../../constants"; 

describe("Timeline Component", () => {
  const defaultProps: TimelineProps = {
    timeline: timeLineData,
  };

  it("renders all timeline labels", () => {
    const { getByText } = render(<Timeline {...defaultProps} />);

    timeLineData.forEach((data) => {
      const labelElement = getByText(data.timelineLabel);
      expect(labelElement).toBeInTheDocument();
    });
  });

  it("renders the active timeline label with special styling", () => {
    const { getByText } = render(
      <Timeline {...defaultProps} timeline={timeLineData.slice(0, 4)} />
    );

    const activeLabelElement = getByText(timeLineData[3].timelineLabel);
    expect(activeLabelElement).toBeInTheDocument();

   
  });
});
