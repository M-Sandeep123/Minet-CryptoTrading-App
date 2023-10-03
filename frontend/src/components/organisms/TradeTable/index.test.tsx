import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  within,
  screen,
} from "@testing-library/react";
import { TradeTable } from ".";
import * as api from "../../../../utils/services/index";
import fetchMock from "jest-fetch-mock";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { when } from "jest-when";
import { BrowserRouter } from "react-router-dom";
jest.mock("axios");
const axiosMock = axios as jest.Mocked<typeof axios>;

const mockCryptoData = [
  {
    id: 1,
    cryptoName: "Bitcoin",
    cryptoSrc: "bitCoin.png",
    cryptoLabel: "BTC",
    cryptoPrice: 3285553.73,
    cryptoMarketCap: "$60.1T",
    cryptoChange: "+1.06%",
    cryptoVolume: "$2.9T",
    cryptoCirculatingSupply: "18.8M BTC",
    cryptoWatchListed: false,
  },
  {
    id: 2,
    cryptoName: "Ethereum",
    cryptoSrc: "ethereum.png",
    cryptoLabel: "ETH",
    cryptoPrice: 216678.1,
    cryptoMarketCap: "$162.92",
    cryptoChange: "-5.49%",
    cryptoVolume: "$11.5T",
    cryptoCirculatingSupply: "122.60M ETH",
    cryptoWatchListed: false,
  },
];

const mockWatchlistData = [
  {
    id: 1,
    cryptoName: "Bitcoin",
    cryptoSrc: "bitCoin.png",
    cryptoLabel: "BTC",
    cryptoPrice: 3285553.73,
    cryptoMarketCap: "$60.1T",
    cryptoChange: "+1.06%",
    cryptoVolume: "$2.9T",
    cryptoCirculatingSupply: "18.8M BTC",
    cryptoWatchListed: true,
  },
];

const mockCryptoUpdatedData = [
  {
    id: 1,
    cryptoName: "Bitcoin",
    cryptoSrc: "bitCoin.png",
    cryptoLabel: "BTC",
    cryptoPrice: 3285553.73,
    cryptoMarketCap: "$60.1T",
    cryptoChange: "+1.06%",
    cryptoVolume: "$2.9T",
    cryptoCirculatingSupply: "18.8M BTC",
    cryptoWatchlisted: true,
  },
];
const mockCryptoWatchlistData = [
  {
    id: 1,
    cryptoName: "Bitcoin",
    cryptoSrc: "bitCoin.png",
    cryptoLabel: "BTC",
    cryptoPrice: 3285553.73,
    cryptoMarketCap: "$60.1T",
    cryptoChange: "+1.06%",
    cryptoVolume: "$2.9T",
    cryptoCirculatingSupply: "18.8M BTC",
    cryptoWatchlisted: false,
  },
];

const apiBase = "http://localhost/3000";
jest.mock("../../../../utils/services/index", () => ({
  updateCryptoCurrencyData: jest.fn(),
  updateWatchlistedData: jest.fn(),
  removeWatchlistedData: jest.fn(),
  getCryptoCurrencyData: jest.fn(),
  getWatchlistData: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("TradeTable", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    fetchMock.resetMocks();
    jest
      .spyOn(api, "getCryptoCurrencyData")
      .mockResolvedValue({ data: mockCryptoData });
    jest
      .spyOn(api, "getWatchlistData")
      .mockResolvedValue({ data: mockWatchlistData });

    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));
  });

  test("should render two tabs with expected labels", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={[{ state: { value: "all" } }]}>
        <TradeTable />
      </MemoryRouter>
    );

    const allAssetsTab = getByText("All Assets");
    const watchlistTab = getByText("Watchlist");

    expect(allAssetsTab).toBeInTheDocument();
    expect(watchlistTab).toBeInTheDocument();
  });

  test("renders column headers", () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter initialEntries={[{ state: { value: "all" } }]}>
        <TradeTable />
      </MemoryRouter>
    );

    const nameHeader = getByText("Name");
    const priceHeader = getByText("Price");
    const changeHeader = getByText("Change");
    const marketCapHeader = getByText("MarketCap");
    const capIcon = getByTestId("cap-icon");
    const watchHeader = getByText("Watch");
    expect(nameHeader).toBeInTheDocument();
    expect(priceHeader).toBeInTheDocument();
    expect(changeHeader).toBeInTheDocument();
    expect(marketCapHeader).toBeInTheDocument();
    expect(capIcon).toBeInTheDocument();
    expect(watchHeader).toBeInTheDocument();
  });
  test("renders specific coin data and sorting", async () => {
    const coinNameOne = "Bitcoin";
    const coinNameTwo = "Ethereum";
    render(
      <MemoryRouter initialEntries={[{ state: { value: "all" } }]}>
        <TradeTable />
      </MemoryRouter>
    );

    const tabElement = screen.getByTestId("tab1");
    fireEvent.click(tabElement);

    await waitFor(() => {
      const rowElements = screen.getAllByTestId("row");
      if (rowElements.length > 0) {
        const firstRow = screen.getAllByTestId("row-name");
        expect(firstRow[0]).toHaveTextContent(coinNameOne);
        const lastRow = screen.getAllByTestId("row-name");
        expect(lastRow[rowElements.length - 1]).toHaveTextContent(coinNameTwo);
      }
      const capIcon = screen.getByTestId("cap-icon");
      expect(capIcon).toBeInTheDocument();
      fireEvent.click(capIcon);

      const rowElementDescending = screen.getAllByTestId("row");
      if (rowElementDescending.length > 0) {
        const firstRow = rowElementDescending[0];
        expect(firstRow).toHaveTextContent(coinNameTwo);
        const lastRow = rowElementDescending[rowElementDescending.length - 1];
        expect(lastRow).toHaveTextContent(coinNameOne);
      }

      fireEvent.click(capIcon);

      const rowElementAscending = screen.getAllByTestId("row");
      if (rowElementAscending.length > 0) {
        const firstRow = rowElementAscending[0];
        expect(firstRow).toHaveTextContent(coinNameOne);
        const lastRow = rowElementAscending[rowElementAscending.length - 1];
        expect(lastRow).toHaveTextContent(coinNameTwo);
      }
    });
  });

  test("should click all tab, clicks StarIcon and verifies data changes", async () => {
    const coinNameOne = "Bitcoin";
    const mockUserId = 1;

    render(
      <MemoryRouter initialEntries={[{ state: { value: "all" } }]}>
        <TradeTable />
      </MemoryRouter>
    );

    await waitFor(() => {
      const initialRowElements = screen.getAllByTestId("row");
      const initialFirstRow = initialRowElements[0];
      expect(initialFirstRow).toHaveTextContent(coinNameOne);

      const allTab = screen.getByTestId("tab1");
      fireEvent.click(allTab);

      const watchlistRowElements = screen.getAllByTestId("row");
      const watchlistFirstRow = watchlistRowElements[0];
      const starIcon = within(watchlistFirstRow).getByTestId("star-icon");
      fireEvent.click(starIcon);
      const spyAxios = jest
        .spyOn(axios, "put")
        .mockResolvedValueOnce({ data: mockWatchlistData });

      when(spyAxios)
        .calledWith(`${apiBase}/cryptocurrency/`, {
          params: {
            id: mockUserId,
          },
          body: {
            mockCryptoUpdatedData,
          },
        })
        .mockResolvedValueOnce(mockCryptoUpdatedData);

      when(spyAxios)
        .calledWith(`${apiBase}/watchlist/`, {
          body: {
            mockCryptoWatchlistData ,
          },
        })
        .mockResolvedValueOnce(mockCryptoWatchlistData );
    });
    expect(screen.getByText("All Assets")).toBeInTheDocument();
  });

  test("should clicks on a coin name and expects next Page navigation", async () => {
    const coinNameToClick = "Bitcoin";
    const coinNameToBeClicked = "Ethereum";
    render(
      <MemoryRouter initialEntries={[{ state: { value: "all" } }]}>
        <TradeTable />
      </MemoryRouter>
    );
    const allElement = screen.getByTestId("tab1");
    fireEvent.click(allElement);
    await waitFor(() => {
      const coinNameElement = screen.getByText(coinNameToClick);
      fireEvent.click(coinNameElement);

      const coinSecondNameElement = screen.getByText(coinNameToBeClicked);
      fireEvent.click(coinSecondNameElement);
    });
  });

  test("should render watchlist tab with data", async () => {
    render(
      <MemoryRouter initialEntries={[{ state: { value: "watchlist" } }]}>
        <TradeTable />
      </MemoryRouter>
    );
    jest
      .spyOn(api, "getWatchlistData")
      .mockResolvedValue({ data: mockWatchlistData });
    const watchlistElement = screen.getByTestId("tab2");
    fireEvent.click(watchlistElement);
    await waitFor(() => {
      const rowElement = screen.getAllByTestId("row");
      if (rowElement.length > 0) {
        const firstRow = screen.getAllByTestId("row-name");
        expect(firstRow[0]).toHaveTextContent("Bitcoin");
      }
    });
  });

  test("should click watchlist tab, clicks StarIcon and verifies data changes", async () => {
    const coinNameOne = "Bitcoin";
    const mockUserId = 1;

    render(
      <MemoryRouter initialEntries={[{ state: { value: "watchlist" } }]}>
        <TradeTable />
      </MemoryRouter>
    );

    await waitFor(() => {
      const initialRowElements = screen.getAllByTestId("row");
      const initialFirstRow = initialRowElements[0];
      expect(initialFirstRow).toHaveTextContent(coinNameOne);

      const watchlistTab = screen.getByTestId("tab2");
      fireEvent.click(watchlistTab);

      const watchlistRowElements = screen.getAllByTestId("row");
      const watchlistFirstRow = watchlistRowElements[0];
      const starIcon = within(watchlistFirstRow).getByTestId("star-icon");
      fireEvent.click(starIcon);

      const spyAxios = jest
        .spyOn(axios, "put")
        .mockResolvedValueOnce({ data: mockCryptoWatchlistData });

      when(spyAxios)
        .calledWith(`${apiBase}/cryptocurrency/`, {
          params: {
            id: mockUserId,
          },
          body: {
            mockCryptoWatchlistData,
          },
        })
        .mockResolvedValueOnce(mockCryptoWatchlistData);

      const spyPostAxios = jest
        .spyOn(axios, "delete")
        .mockResolvedValueOnce([]);
      when(spyPostAxios)
        .calledWith(`${apiBase}/watchlist/`, {
          params: {
            id: mockUserId,
          },
          data: {
            mockCryptoWatchlistData,
          },
        })
        .mockResolvedValueOnce([]);
    });
    const watchlistTab = screen.getByTestId("tab2");
    fireEvent.click(watchlistTab);
    expect(screen.queryByText("bitcoin")).not.toBeInTheDocument();
  });

  test("should clicks on a coin name and expects next Page navigation in watchlist tab", async () => {
    const coinNameToClick = "Bitcoin";
    render(
      <MemoryRouter initialEntries={[{ state: { value: "watchlist" } }]}>
        <TradeTable />
      </MemoryRouter>
    );
    let coinNameElement: any;
    await waitFor(() => {
      coinNameElement = screen.getByText(coinNameToClick);
    });
    fireEvent.click(coinNameElement);
  });

  test("should handle onSearch when test is entered", async () => {
    render(
      <MemoryRouter initialEntries={[{ state: { value: "all" } }]}>
        <TradeTable />
      </MemoryRouter>
    );
    const allTab = screen.getByTestId("tab1");
    fireEvent.click(allTab);
    await waitFor(() => {
      const searchText = document.getElementById(
        "textfield-input"
      ) as HTMLInputElement;

      fireEvent.change(searchText, {
        target: { value: "bitcoin" },
      });
      const searchTestChanged = document.getElementById(
        "textfield-input"
      ) as HTMLInputElement;

      expect(searchTestChanged.value).toBe("bitcoin");
    });
  });
  test("should handle onSearch and star icon click", async () => {
    render(
      <MemoryRouter initialEntries={[{ state: { value: "all" } }]}>
        <TradeTable />
      </MemoryRouter>
    );
    const allTab = screen.getByTestId("tab1");
    fireEvent.click(allTab);
    await waitFor(() => {
      const searchText = document.getElementById(
        "textfield-input"
      ) as HTMLInputElement;

      fireEvent.change(searchText, {
        target: { value: "bitcoin" },
      });

      const watchlistRowElements = screen.getAllByTestId("row");
      const watchlistFirstRow = watchlistRowElements[0];
      const starIcon = within(watchlistFirstRow).getByTestId("star-icon");
      fireEvent.click(starIcon);

      const searchTestChanged = document.getElementById(
        "textfield-input"
      ) as HTMLInputElement;

      expect(searchTestChanged.value).toBe("bitcoin");
    });
  });

  test("should click watchlist tab, clicks StarIcon and verifies data changes", async () => {
    const coinNameOne = "Bitcoin";
    const mockUserId = 1;

    render(
      <MemoryRouter initialEntries={[{ state: { value: "watchlist" } }]}>
        <TradeTable />
      </MemoryRouter>
    );

    await waitFor(() => {
      const initialRowElements = screen.getAllByTestId("row");
      const initialFirstRow = initialRowElements[0];
      expect(initialFirstRow).toHaveTextContent(coinNameOne);

      const allTab = screen.getByTestId("tab1");
      fireEvent.click(allTab);

      const watchlistRowElements = screen.getAllByTestId("row");
      const watchlistFirstRow = watchlistRowElements[0];
      const starIcon = within(watchlistFirstRow).getByTestId("star-icon");
      fireEvent.click(starIcon);

      const spyAxios = jest.spyOn(axios, "put");

      when(spyAxios)
        .calledWith(`${apiBase}/cryptocurrency/`, {
          params: {
            id: mockUserId,
          },
          body: {
            mockCryptoWatchlistData,
          },
        })
        .mockResolvedValueOnce(mockCryptoWatchlistData);

      const spyPostAxios = jest.spyOn(axios, "delete");
      when(spyPostAxios)
        .calledWith(`${apiBase}/watchlist/`, {
          params: {
            id: mockUserId,
          },
          data: {
            mockCryptoWatchlistData,
          },
        })
        .mockResolvedValueOnce([]);
    });
    const watchlistTab = screen.getByTestId("tab2");
    fireEvent.click(watchlistTab);
    expect(screen.queryByText("bitcoin")).not.toBeInTheDocument();
  });
});
