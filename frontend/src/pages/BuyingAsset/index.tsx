import { Box, styled } from "@mui/material";
import CustomTypography from "../../components/atoms/Typography";
import theme from "../../theme";
import TradeTemplate from "../../components/templates/TradeTemplate";
import CheckoutPageCard from "../../components/molecules/CheckoutCard";
import usd from "/public/assets/icons/usd.png";
import AmountDetail from "../../components/organisms/CryptoPurchase";
import { SpeedDelivery } from "../../components/molecules/SpeedDeliveryCard/index.stories";
import BuyNowCard from "../../components/organisms/BuyNow";
import { useEffect, useState } from "react";
import {
  getCryptoCurrencyData,
  updateWalletDetails,
} from "../../../utils/services";
import CryptoCard from "../../components/organisms/CryptoCard";
import { SuccessTransaction } from "../../components/organisms/SuccessTransaction";
import { PAGE_LABELS } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../store/user";
import { useAuth0 } from "@auth0/auth0-react";
import { formatCurrentDate } from "../SellAsset";

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
  ".speedDelivery": {
    paddingTop: "20px",
    paddingBottom: "38px",
  },
});
export const BuyingAssetPage = () => {
  const [coinData, setCoinData] = useState({
    price: 0,
    label: "",
    name: "",
  });
  const { logout } = useAuth0();
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [buyingPrice, setBuyingPrice] = useState<number>(0);
  const [deliveryFees, setDeliveryFees] = useState<string>("0.001");
  const [transactionFees, setTransactionFees] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [currentState, setCurrentState] = useState<number>(0);
  const { userInfo } = useUser();
  const balance = userInfo.balance;
  const navigate = useNavigate();
  const location = useLocation().state;

  const handleSelectQuantity = (value: number) => {
    const updatingValue = Number(value.toFixed(6));
    setSelectedValue(updatingValue);
    const total = Number((updatingValue * coinData.price).toFixed(2));
    setBuyingPrice(total);
  };
  const handleDeliveryFees = (value: string) => {
    setDeliveryFees(value);
    const transfees = Number(value) * coinData.price;
    setTransactionFees(Number(transfees.toFixed(2)));
  };

  const handleBuyNow = async () => {
    try {
      const currentDate = new Date();

      const transactionData = {
        userId: userInfo.id,
        date: formatCurrentDate(currentDate),
        transactionCryptoName: coinData.name,
        userName: `From ${userInfo.fullName}`,
        quantity: `+${selectedValue} ${coinData.label}`,
        transactionType: "PURCHASED",
        availableBalance: `+$${buyingPrice}`,
      };
      const response = await updateWalletDetails(transactionData);

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
  }, [coinData.price]);

  useEffect(() => {
    const buyingAmount = Number((buyingPrice + transactionFees).toFixed(0));
    setTotalAmount(buyingAmount);
    const shouldDisable = selectedValue === 0 || totalAmount >= balance;
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
                      label={PAGE_LABELS.BUY_CRYPTO}
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
                        label={PAGE_LABELS.PAYMENT_METHOD}
                        color={theme.palette.beta_text.high_emphasis}
                      />
                      <Box className="usdCard">
                        <CheckoutPageCard
                          variant={"caption1"}
                          label={PAGE_LABELS.DEFAULT}
                          color={"theme.palette.beta_text.high_emphasis"}
                          src={usd}
                          width={"32px"}
                          height={"32px"}
                          variant1={"caption1"}
                          label1={PAGE_LABELS.USD_COIN}
                          typography2={
                            <CustomTypography
                              variant="subtitle1"
                              label={`Total Balance - $${balance}`}
                              color={theme.palette.beta_text.medium_emphasis}
                            />
                          }
                        />
                      </Box>
                    </Box>
                  </PaymentMethodBox>
                  <PaymentMethodBox>
                    <AmountDetail
                      isBuyButton={true}
                      cryptoLabel={coinData.label}
                      cryptoPrice={coinData.price}
                      accountBalance={balance}
                      price={buyingPrice}
                      getSelectQuantity={handleSelectQuantity}
                      buttonLabel={"Buy max"}
                    />
                  </PaymentMethodBox>
                  <PaymentMethodBox>
                    <Box className="inner">
                      <CustomTypography
                        variant={"body1"}
                        label={PAGE_LABELS.SELECT_SPEED_DELIVERY}
                        color={theme.palette.beta_text.high_emphasis}
                      />
                      <Box className="speedDelivery">
                        <SpeedDelivery
                          initialValue={PAGE_LABELS.OPTION_VALUES[0]}
                          options={[
                            {
                              value: `${PAGE_LABELS.OPTION_VALUES[0]}`,
                              name: `${PAGE_LABELS.OPTION_NAMES[0]}`,
                              time: `${PAGE_LABELS.OPTION_TIME[0]}`,
                              fees: `${PAGE_LABELS.OPTION_FEES[0]} ${coinData.label}`,
                            },
                            {
                              value: `${PAGE_LABELS.OPTION_VALUES[1]}`,
                              name: `${PAGE_LABELS.OPTION_NAMES[1]}`,
                              time: `${PAGE_LABELS.OPTION_TIME[1]}`,
                              fees: `${PAGE_LABELS.OPTION_FEES[1]} ${coinData.label}`,
                            },
                            {
                              value: `${PAGE_LABELS.OPTION_VALUES[2]}`,
                              name: `${PAGE_LABELS.OPTION_NAMES[2]}`,
                              time: `${PAGE_LABELS.OPTION_TIME[2]}`,
                              fees: `${PAGE_LABELS.OPTION_FEES[2]} ${coinData.label}`,
                            },
                          ]}
                          getSelectedOption={handleDeliveryFees}
                        />
                      </Box>
                    </Box>
                  </PaymentMethodBox>
                </Box>
              </Box>
              <Box sx={{ width: "40%" }}>
                <BuyNowCard
                  isBuying={true}
                  coinQty={`${selectedValue} ${coinData.label}`}
                  coinValue={`1${coinData.label} = $ ${coinData.price}`}
                  paymentMethod={PAGE_LABELS.VISA_CREDIT}
                  deliveryFees={`${deliveryFees} ${coinData.label}`}
                  depositTo={`${coinData.name} wallet`}
                  priceOfQty={`$ ${buyingPrice}`}
                  transactionFee={`$ ${transactionFees}`}
                  total={`$ ${totalAmount}`}
                  buttonLabel={PAGE_LABELS.BUTTON_LABEL}
                  buttonDisable={buttonDisable}
                  onClick={handleBuyNow}
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
                isTransactionBuy={true}
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
    />
  );
};
