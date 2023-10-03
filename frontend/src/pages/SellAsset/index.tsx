import { Box, styled } from "@mui/material";
import CustomTypography from "../../components/atoms/Typography";
import theme from "../../theme";
import TradeTemplate from "../../components/templates/TradeTemplate";
import CheckoutPageCard from "../../components/molecules/CheckoutCard";
import usd from "/public/assets/icons/usd.png";
import ethereum from "/public/assets/images/ethereum.png";
import bitcoin from "/public/assets/images/bitCoin.png";
import AmountDetail from "../../components/organisms/CryptoPurchase";
import BuyNowCard from "../../components/organisms/BuyNow";
import { useEffect, useState } from "react";
import {
  getCryptoCurrencyData,
  updateWalletDetails,
} from "../../../utils/services";
import CryptoCard from "../../components/organisms/CryptoCard";
import { SuccessTransaction } from "../../components/organisms/SuccessTransaction";
import { PAGE_LABELS } from "../../constants";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useUser } from "../../store/user";
import { useAuth0 } from "@auth0/auth0-react";

const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});
const PaymentMethodBox = styled(Box)({
  margin: "6px 6px",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
  width: "104%",
  ".inner": {
    background: "#FFF",
    padding: "24px 24px",
  },
  ".usdCard": {
    paddingTop: "12px",
  },
  ".depoitTo": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    paddingTop: "12px",
    paddingBottom: "12px",
  },
});

export const formatCurrentDate = (currentDate: Date): string => {
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const SellPage = () => {
  const navigate = useNavigate();
  const location = useLocation().state;
  const { logout } = useAuth0();
  const [coinData, setCoinData] = useState({
    price: 0,
    label: "",
    name: "",
  });
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [transactionFees, setTransactionFees] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [currentState, setCurrentState] = useState<number>(0);
  const handleSelectQuantity = (value: number) => {
    const updatingValue = Number(value.toFixed(6));
    setSelectedValue(updatingValue);
    const total = Number((updatingValue * coinData.price).toFixed(2));
    setPrice(total);
  };

  const { cryptoLabel } = useParams();
  const { userInfo } = useUser();

  const handleSellNow = async () => {
    try {
      const currentDate = new Date();

      const walletData = {
        userId: userInfo.id,
        date: formatCurrentDate(currentDate),
        transactionCryptoName: coinData.name,
        userName: `From ${userInfo.fullName}`,
        quantity: `+${selectedValue} ${coinData.label}`,
        availableBalance: `+$${price}`,
        transactionType: "SOLD",
      };
      const response = await updateWalletDetails(walletData);
      if (response.status === 201) {
        setCurrentState(1);
      } else {
        console.error("Transaction failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchData();
    if (coinData.price > 0) {
      const initialFees = 0.001 * coinData.price;
      setTransactionFees(Number(initialFees.toFixed(2)));
    }
    if (cryptoLabel === "ETH") {
      setTransactionFees(PAGE_LABELS.ETH_TRANSACTION_FEES);
    } else {
      setTransactionFees(PAGE_LABELS.BTC_TRANSACTION_FEES);
    }
  }, [coinData.price]);

  useEffect(() => {
    const sellingAmount = Number((price + transactionFees).toFixed(0));
    setTotalAmount(sellingAmount);
    const shouldDisable =
      selectedValue === 0 || totalAmount >= userInfo.balance;
    setButtonDisable(shouldDisable);
  }, [selectedValue, transactionFees, totalAmount]);

  const fetchData = async () => {
    const tradeData = await getCryptoCurrencyData(userInfo.id);
    const selectedCoinData = tradeData.data?.find(
      (crypto: any) => crypto.cryptoLabel === location.cryptoLabel
    );
    if (selectedCoinData) {
      const { cryptoPrice, cryptoLabel, cryptoName } = selectedCoinData;
      setCoinData({
        price: cryptoPrice,
        label: cryptoLabel,
        name: cryptoName,
      });
    }
  };

  return (
    <TradeTemplate
      content={
        <>
          {currentState === 0 && (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "24px",
              }}
            >
              <Box width="55%">
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "24px" }}
                >
                  <HeaderBox>
                    <CustomTypography
                      label={PAGE_LABELS.SELL_CRYPTO}
                      variant={"subtitle1"}
                      color={theme.palette.beta_text.high_emphasis}
                    />
                  </HeaderBox>
                  <Box
                    sx={{
                      margin: "0px 6px",
                      border: `1px solid ${theme.palette.gamma_grey[100]}`,
                    }}
                  >
                    <CryptoCard selectedCrypto={location.cryptoLabel} />
                  </Box>
                  <PaymentMethodBox>
                    <Box className="inner">
                      <CustomTypography
                        variant={"body1"}
                        label={PAGE_LABELS.TOTAL_BALANCES}
                        color={theme.palette.beta_text.high_emphasis}
                      />
                      <Box className="usdCard">
                        <CheckoutPageCard
                          variant={"subtitle1"}
                          label={`${price}${cryptoLabel}`}
                          color={"theme.palette.beta_text.high_emphasis"}
                          src={cryptoLabel === "ETH" ? ethereum : bitcoin}
                          width={"32px"}
                          height={"32px"}
                          variant1={"caption1"}
                          label1={
                            cryptoLabel === "ETH"
                              ? PAGE_LABELS.ETHEREUM
                              : PAGE_LABELS.BITCOIN
                          }
                        />
                      </Box>
                    </Box>
                  </PaymentMethodBox>
                  <PaymentMethodBox>
                    <AmountDetail
                      cryptoLabel={coinData.label}
                      cryptoPrice={coinData.price}
                      accountBalance={userInfo.balance}
                      price={price}
                      getSelectQuantity={handleSelectQuantity}
                      isBuyButton={false}
                      buttonLabel={"Sell Max"}
                    />
                  </PaymentMethodBox>
                  <PaymentMethodBox>
                    <Box className="inner">
                      <Box className="depoitTo">
                        <CustomTypography
                          variant={"body1"}
                          label={"Deposit to"}
                          color={theme.palette.beta_text.high_emphasis}
                        />
                        <CheckoutPageCard
                          src={usd}
                          width={"32px"}
                          height={"32px"}
                          variant1={"caption1"}
                          label1={PAGE_LABELS.USD_COIN}
                          color1={theme.palette.beta_text.high_emphasis}
                          variant={"caption1"}
                          label={PAGE_LABELS.DEFAULT}
                          color={`theme.palette.beta_text.medium_emphasis`}
                        />
                      </Box>
                    </Box>
                  </PaymentMethodBox>
                </Box>
              </Box>
              <Box sx={{ width: "40%" }}>
                <BuyNowCard
                  isBuying={false}
                  coinQty={`${selectedValue} ${coinData.label}`}
                  coinValue={`1${coinData.label} = $ ${coinData.price}`}
                  paymentMethod={PAGE_LABELS.WALLET_CARD}
                  deliveryFees={
                    cryptoLabel === "ETH"
                      ? `${PAGE_LABELS.DELIVERY_FEE_ETH} ${coinData.label}`
                      : `${PAGE_LABELS.DELIVERY_FEE_BTC} ${coinData.label}`
                  }
                  depositTo={PAGE_LABELS.DEPOSIT_TO}
                  priceOfQty={`$ ${price}`}
                  transactionFee={
                    cryptoLabel === "ETH"
                      ? `$ ${PAGE_LABELS.ETH_TRANSACTION_FEES}`
                      : `$ ${PAGE_LABELS.BTC_TRANSACTION_FEES}`
                  }
                  total={`$ ${totalAmount}`}
                  buttonLabel={PAGE_LABELS.SELL_BUTTON_LABEL}
                  buttonDisable={buttonDisable}
                  onClick={handleSellNow}
                />
              </Box>
            </Box>
          )}
          {currentState === 1 && (
            <Box sx={{ paddingLeft: "110px", paddingBottom: "60px" }}>
              <SuccessTransaction
                onClickUSD={() => {
                  navigate("/trade-wallet");
                }}
                isTransactionBuy={false}
                quantity={`${selectedValue}`}
                currency={`${coinData.label}`}
              />
            </Box>
          )}
        </>
      }
      title={"Checkout"}
      onClickAvatarIcon={() => {
        sessionStorage.setItem("email", "");
        logout();
      }}
      isButtonRequired={true}
      isSellButtonDisabled={true}
      isBuyButtonDisabled={true}
      onClickBuyButton={() => {
        console.log("Buy Clicked");
      }}
      onClickSellButton={() => {
        console.log("Sell Clicked");
      }}
    />
  );
};

export default SellPage;
