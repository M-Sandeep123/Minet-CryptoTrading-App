import { fireEvent, render, screen } from "@testing-library/react";
import Watchlist from ".";
import { graphData } from "../../../constants";
import bitCoin from "../../public/assets/images/bitCoin.png";
import arrowUpRight from "../../public/assets/icons/arrowUpRight.svg";

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

jest.mock("@nivo/line", () => ({
  ResponsiveLine: () => <div data-testid="mocked-responsive-line" />,
}));

describe("Watchlist Organism", () => {
  test("should render component correctly", () => {
    render(
      <Watchlist
        onClickDiscovery={() => {}}
        onClickWatchList={() => {}}
        watchlistData={graphData}
      ></Watchlist>
    );
    const watchlistElement = screen.getByText("Watchlist");
    expect(watchlistElement).toBeInTheDocument();

    const discoveryElement = screen.getByText("Discover assets");
    expect(discoveryElement).toBeInTheDocument();
  });

  test("should occupy full space if only one element is passed in graph array", () => {
    render(
      <Watchlist
        onClickDiscovery={() => {}}
        onClickWatchList={() => {}}
        watchlistData={oddData}
      ></Watchlist>
    );
    const bitcoinElement = screen.getByText("Bitcoin");
    expect(bitcoinElement).toBeInTheDocument();

    const labelElement = screen.getByText("+1.2%");
    expect(labelElement).toBeInTheDocument();
  });

  test("should call onclick function when clicked on 'Discover Assests'", () => {
    const handleClickDiscovery = jest.fn();
    const handleClickWatchList = jest.fn();
    render(
      <Watchlist
        onClickDiscovery={handleClickDiscovery}
        onClickWatchList={handleClickWatchList}
        watchlistData={oddData}
      ></Watchlist>
    );
    const discoveryElement = screen.getByTestId("discovery");
    fireEvent.click(discoveryElement);

    expect(handleClickDiscovery).toHaveBeenCalledTimes(1);

    const watchlistElement = screen.getByTestId("view-watchlist");
    fireEvent.click(watchlistElement);

    expect(handleClickWatchList).toHaveBeenCalledTimes(1);
  });
});
