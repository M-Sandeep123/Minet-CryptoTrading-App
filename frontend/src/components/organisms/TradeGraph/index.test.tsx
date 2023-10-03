import { render, screen } from "@testing-library/react";
import StatGraph from ".";
import { GRAPH_REPORT, timeLineData } from "../../../constants";

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));

describe("Trade Graph component", () => {
  it("should render without errors", () => {
    const { getByText } = render(
      <StatGraph
        flag={true}
        graphData={GRAPH_REPORT}
        layoutWidth={""}
        layoutHeight={""} graphLayout={false}      />
    );
    timeLineData.forEach((data) => {
      const labelElement = getByText(data.timelineLabel);
      expect(labelElement).toBeInTheDocument();
    });
  });
  it("should not render the flag value of the graph", () => {
    render(
      <StatGraph
        flag={false}
        graphData={GRAPH_REPORT}
        layoutWidth={""}
        layoutHeight={""} graphLayout={true}      />
    );
    const flageElement = screen.getByTestId("mocked-responsive-line");
    expect(flageElement).toBeInTheDocument();
  });
});
