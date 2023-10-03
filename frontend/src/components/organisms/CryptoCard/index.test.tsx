import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CryptoCard from ".";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../theme";
import { getCryptoCurrencyData } from "../../../../utils/services"; // You may need to mock this service

jest.mock("../../../../utils/services", () => ({
  getCryptoCurrencyData: jest.fn(() => Promise.resolve({ data: [] })),
}));

describe("CryptoCard component", () => {
  it(" should renders correctly with no crypto data", async () => {
    render(
      <ThemeProvider theme={theme}>
        <CryptoCard />
      </ThemeProvider>
    );

    expect(screen.getByText("Choose Crypto")).toBeInTheDocument();
  });

  it(" should renders crypto cards correctly with mock crypto data", async () => {
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
      {
        id: 3,
        cryptoName: "Bitcoin Coin",
        cryptoSrc: "bitcoinCoin.png",
        cryptoLabel: "BNB",
        cryptoPrice: 24942.54,
        cryptoChange: "-3.69%",
        cryptoMarketCap: "$4.2T",
        cryptoVolume: "$11.5T",
        cryptoCirculatingSupply: "122.60M ETH",
        cryptoWatchListed: false,
      },
      {
        id: 4,
        cryptoName: "Cardano",
        cryptoSrc: "cardano.png",
        cryptoLabel: "ADA",
        cryptoPrice: 104.52,
        cryptoChange: "-1.82%",
        cryptoMarketCap: "$3.4T",
        cryptoWatchListed: false,
      },
      {
        id: 5,
        cryptoName: "XRP",
        cryptoSrc: "xrp.svg",
        cryptoLabel: "XRP",
        cryptoPrice: 57.21,
        cryptoChange: "+1.11%",
        cryptoMarketCap: "$2.7T",
        cryptoWatchListed: false,
      },
      {
        id: 6,
        cryptoName: "Dodge Coin",
        cryptoSrc: "DodgeCoin.png",
        cryptoLabel: "XRP",
        cryptoPrice: 17.64,
        cryptoChange: "-6.96%",
        cryptoMarketCap: "$2.3T",
        cryptoWatchListed: false,
      },
      {
        id: 7,
        cryptoName: "USD Coin",
        cryptoSrc: "usd.png",
        cryptoLabel: "XRP",
        cryptoPrice: 74.26,
        cryptoChange: "+1.01%",
        cryptoMarketCap: "$2.1T",
        cryptoWatchListed: false,
      },
      {
        id: 8,
        cryptoName: "Tether",
        cryptoSrc: "tether.svg",
        cryptoLabel: "BNB",
        cryptoPrice: 24942.51,
        cryptoChange: "-3.69%",
        cryptoMarketCap: "$4.2T",
        cryptoVolume: "$11.5T",
        cryptoCirculatingSupply: "122.60M ETH",
        cryptoWatchListed: false,
      },
      {
        id: 9,
        cryptoName: "Ethereum 2",
        cryptoSrc: "ethereum2.png",
        cryptoLabel: "BNB",
        cryptoPrice: 24942.53,
        cryptoChange: "-3.69%",
        cryptoMarketCap: "$4.2T",
        cryptoVolume: "$11.5T",
        cryptoCirculatingSupply: "122.60M ETH",
        cryptoWatchListed: false,
      },
    ];

    (getCryptoCurrencyData as jest.Mock).mockResolvedValue({
      data: mockCryptoData,
    });

    render(
      <ThemeProvider theme={theme}>
        <CryptoCard />
      </ThemeProvider>
    );

    expect(screen.getByText("Choose Crypto")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("Bitcoin")).toBeInTheDocument();
      expect(screen.getByText("Ethereum")).toBeInTheDocument();
      expect(screen.getByText("$ 216678.1")).toBeInTheDocument();
      expect(screen.getByText("$ 3285553.73")).toBeInTheDocument();
      expect(screen.getByText("Cardano")).toBeInTheDocument();
      expect(screen.getByText("$ 24942.51")).toBeInTheDocument();
    });
    const bitcoinCard = screen.getByText("Bitcoin");

    fireEvent.click(bitcoinCard);
  });
});
