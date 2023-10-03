import { render, screen } from "@testing-library/react";

import WatchlistCard from ".";

import theme from "../../../theme";

import bitCoin from "../../../../public/assets/images/bitCoin.png";

import arrowUpRight from "../../../../public/assets/icons/arrowUpRight.svg";
import { graphData } from "../../../constants";

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));

const oddData = [
  {
    id: 1,
    variant: "body1",
    label: "$3,00,439.93",
    color: "",
    graphLabel: "+1.2%",
    graphVariant: "overline",
    graphColor: "",
    iconSrc: arrowUpRight,
    src: bitCoin,
    width: "42px",
    height: "42px",
    variant1: "body1",
    label1: "Bitcoin",
    graphData: [
      {
        id: "bitcoin",
        color: "hsl(116, 80%, 50%)",
        data: [
          {
            x: 0,
            y: 0,
          },
          {
            x: 10,
            y: 25,
          },
          {
            x: 17.5,
            y: 10,
          },
          {
            x: 22.5,
            y: 20,
          },
          {
            x: 30,
            y: 18,
          },
          {
            x: 45,
            y: 40,
          },
          {
            x: 75,
            y: 5,
          },
          {
            x: 100,
            y: 40,
          },
        ],
      },
    ],
  },
];

describe("WatchList Card", () => {
  test("render the component with text and icon", () => {
    render(
      <WatchlistCard
        variant={"body1"}
        label={"$3,00,439.93"}
        color={`${theme.palette.beta_text.high_emphasis}`}
        graphLabel={"+1.2%"}
        graphVariant={"overline"}
        graphColor={""}
        iconSrc={arrowUpRight}
        src={bitCoin}
        width="42px"
        height="42px"
        variant1={"body1"}
        label1={"Bitcoin"}
        graphData={graphData}
        totalLength={4}
      />
    );

    const textElement = screen.getByText("Bitcoin");
    expect(textElement).toBeInTheDocument();

    const iconElement = screen.getByAltText("image");
    expect(iconElement).toBeInTheDocument();
  });

  test("render the component with  icon and graph", () => {
    render(
      <WatchlistCard
        variant={"body1"}
        label={"$3,00,439.93"}
        color={`${theme.palette.beta_text.high_emphasis}`}
        graphLabel={"+1.2%"}
        graphVariant={"overline"}
        graphColor={""}
        iconSrc={arrowUpRight}
        src={bitCoin}
        width="42px"
        height="42px"
        variant1={"body1"}
        label1={"Bitcoin"}
        graphData={oddData}
        totalLength={1}
      />
    );

    const textElement = screen.getByTestId("mocked-responsive-line");

    expect(textElement).toBeInTheDocument();

    const iconElement = screen.getByAltText("iconimage");

    expect(iconElement).toBeInTheDocument();
  });
});
