import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import TradeHeader from "../../components/organisms/TradeHeader";
import {
  priceCorrelations,
  CRYPTO_ASSETS_PAGE,
  TRADE_GRAPH_DATA,
} from "../../constants";
import StatGraph from "../../components/organisms/TradeGraph";
import { styled, Box, Grid, Stack, Paper } from "@mui/material";
import CustomTypography from "../../components/atoms/Typography";
import PriceCorrelationCard from "../../components/molecules/PriceCorrelationCard";
import TradeTemplate from "../../components/templates/TradeTemplate";
import TransactionTableRow from "../../components/molecules/TransactionTableRow";
import CustomizedInputBase from "../../components/atoms/TextField";
import theme from "../../theme";
import TypographyWithIcon from "../../components/molecules/TypographyWithIcon";
import website from "../../../public/assets/images/paperwork.svg";
import paperwork from "../../../public/assets/images/Vector.svg";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useLocation, useNavigate, useParams } from "react-router";
import {
  getCryptoCurrencyData,
  getWalletDetails,
} from "../../../utils/services";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext, useUser } from "../../store/user";

const StyledPaper = styled(Paper)({
  width: "1239px",
  height: "942px",
  top: "106px",
  left: "104px",
  gap: "24px",
});

const MainDiv = styled(Box)({
  maxHeight: "590px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
  },
  backgroundColor: theme.palette.primary.contrastText,
  border: "1px solid #E8E8F7",
  width: "99.5%",
});
const StyledInnerBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  border: `1px solid ${theme.palette.gamma_grey[300]}`,
  height: "27px",
  padding: "9px",
  gap: "2px",
  borderRadius: "5px",
  alignItems: "center",
  backgroundColor: theme.palette.primary.contrastText,
});

const BalanceBox = styled(Box)({
  width: "96.3%",
  height: "30px",
  padding: "16px 24px 16px 24px",
  borderRadius: "4px",
  gap: "10px",
  backgroundColor: "#F2F2F7",
});

const StyledTab = styled(Tab)({
  textTransform: "none",
});

interface walletObj {
  userId: number;
  date: string;
  transactionCryptoName: string;
  userName: string;
  quantity: string;
  transactionType: string;
  availableBalance: string;
  id: number;
}

const CryptoAssetsPage = () => {
  const { updateUser } = React.useContext(UserContext);
  const [value, setValue] = React.useState(0);
  const [searchQuery, setSearchQuery] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation().state;
  const { logout } = useAuth0();
  const { cryptoId } = useParams();
  const { userInfo } = useUser();
  const [sellDisable, setSellDisable] = React.useState<boolean>(false);
  const [coinData, setCoinData] = React.useState({
    id: 0,
    cryptoName: "",
    cryptoSrc: "",
    cryptoLabel: "",
    cryptoPrice: 0,
    cryptoMarketCap: "",
    cryptoChange: "",
    cryptoVolume: "",
    cryptoCirculatingSupply: "",
    cryptoWatchListed: true,
  });
  const [walletData, setWalletData] = React.useState<walletObj[]>([]);
  const [balance, setbalance] = React.useState({
    totalBalance: 0,
    totalQuantity: 0,
  });
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSearch = (event: any) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);
  };

  const handleOnClickSellButton = () => {
    navigate(`/sell-payment/${cryptoId}`, { state: location });
  };
  const handleOnClickBuyButton = () => {
    navigate(`/purchase-payment/${cryptoId}`, { state: location });
  };
  React.useEffect(() => {
    fetchData();
  }, [walletData]);
  React.useEffect(() => {
    fetchWalletData();
  }, []);

  const fetchData = async () => {
    const tradeData = await getCryptoCurrencyData(userInfo.id);
    const selectedCoinData = tradeData.data?.find(
      (crypto: any) => crypto.cryptoLabel === cryptoId
    );
    if (selectedCoinData) {
      const {
        id,
        cryptoName,
        cryptoSrc,
        cryptoLabel,
        cryptoPrice,
        cryptoMarketCap,
        cryptoChange,
        cryptoVolume,
        cryptoCirculatingSupply,
        cryptoWatchListed,
      } = selectedCoinData;
      setCoinData({
        id: id,
        cryptoName: cryptoName,
        cryptoSrc: cryptoSrc,
        cryptoLabel: cryptoLabel,
        cryptoPrice: cryptoPrice,
        cryptoMarketCap: cryptoMarketCap,
        cryptoChange: cryptoChange,
        cryptoVolume: cryptoVolume,
        cryptoCirculatingSupply: cryptoCirculatingSupply,
        cryptoWatchListed: cryptoWatchListed,
      });
    }
  };

  const fetchWalletData = async () => {
    const walletData = await getWalletDetails();
    const filteredData = walletData.data?.filter(
      (item: any) => userInfo.id === item.userId
    );
    setSellDisable(filteredData.length === 0 ? true : false);
    let selectedWalletData = [];
    const cryptoValue = cryptoId === "BTC" ? "Bitcoin" : "Ethereum";
    selectedWalletData = filteredData.filter(
      (crypto: any) => crypto.transactionCryptoName === cryptoValue
    );

    if (selectedWalletData) {
      setWalletData(selectedWalletData);
      const totalBalance = selectedWalletData.reduce((acc: any, item: any) => {
        const balance = item.availableBalance.substring(2);
        return acc + parseFloat(balance);
      }, 0);

      const totalQuantity = selectedWalletData
        .reduce((acc: any, item: any) => {
          const quantity = item.quantity.substring(1, item.quantity.length - 3);
          return acc + parseFloat(quantity);
        }, 0)
        .toFixed(7);

      setbalance((prev) => ({
        totalBalance: prev.totalBalance + totalBalance,
        totalQuantity: prev.totalQuantity + totalQuantity,
      }));
    }
  };

  function TabPanel(props: any) {
    const { children, value, index } = props;
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`tabpanel-${index}`}
        aria-labelledby={`tab-${index}`}
      >
        {value === index && <Box>{children}</Box>}
      </Typography>
    );
  }

  const tabContent = (
    <Box
      sx={{
        display: "flex",
        gap: "24px",
        flexDirection: "column",
      }}
    >
      <TradeHeader
        iconSrc={location.cryptoSrc}
        coinName={location.cryptoName}
        coinLabel={location.cryptoLabel}
        coinValueChange={`${location.cryptoChange.substring(0, 4)}%`}
        marketCap={location.cryptoMarketCap}
        volume={location.cryptoMarketCap}
        supply={`${location.cryptoCirculatingSupply.substring(
          6
        )}M ${cryptoId} `}
      />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider", width: "99%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            indicatorColor="primary"
          >
            <StyledTab
              label={
                <CustomTypography variant={"subtitle2"} label={"Overview"} />
              }
            />
            <StyledTab
              label={
                <CustomTypography variant={"subtitle2"} label={"Wallets"} />
              }
            />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <StatGraph
            StockDataChange={
              <>
                <CustomTypography
                  variant={"caption1"}
                  label={"Current Value"}
                  color={theme.palette.beta_text.medium_emphasis}
                />
                <CustomTypography
                  variant={"h6"}
                  label={`$${location.cryptoPrice}`}
                  color={theme.palette.beta_text.high_emphasis}
                />
                <Stack
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "left",
                  }}
                >
                  <ArrowOutwardIcon color="success" sx={{ width: "15px" }} />
                  <CustomTypography
                    variant={"caption2"}
                    label={`${coinData.cryptoChange.substring(0, 4)}%`}
                    color={theme.palette.gamma_success[500]}
                  />
                </Stack>
              </>
            }
            graphData={TRADE_GRAPH_DATA}
            flag={false}
            layoutWidth={"96%"}
            layoutHeight={"225px"}
            graphLayout={true}
          />
          <Grid
            container
            spacing={8}
            sx={{ paddingTop: "0px", margin: "0px", paddingLeft: "0px" }}
          >
            <Grid
              item
              xs={8}
              style={{ paddingTop: "24px", margin: "0px", paddingLeft: "0px" }}
            >
              <CustomTypography
                variant={"body1"}
                label={CRYPTO_ASSETS_PAGE.label}
              />
              <CustomTypography
                variant={"body2"}
                label={CRYPTO_ASSETS_PAGE.description}
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                paddingY={2}
                gap={2}
              >
                <CustomTypography
                  variant={"body1"}
                  label={CRYPTO_ASSETS_PAGE.resources}
                />

                <TypographyWithIcon
                  src={paperwork}
                  width={"20px"}
                  height={"20px"}
                  variant1={"body1"}
                  label1={CRYPTO_ASSETS_PAGE.linkOne}
                  color1={"blue"}
                />
                <TypographyWithIcon
                  src={website}
                  width={"25px"}
                  height={"25px"}
                  variant1={"body1"}
                  label1={CRYPTO_ASSETS_PAGE.linkTwo}
                  color1={"blue"}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={4}
              style={{ paddingTop: "24px", margin: "0px", paddingLeft: "0px" }}
            >
              <PriceCorrelationCard priceCorrelationsData={priceCorrelations} />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BalanceBox display="flex" flexDirection="row" gap={2}>
            <CustomTypography
              variant={"h6"}
              label={CRYPTO_ASSETS_PAGE.balance}
            />
            <CustomTypography
              variant={"h6"}
              label={`${balance.totalQuantity} ${cryptoId}`}
            />
            <CustomTypography
              variant={"h6"}
              label={`($${balance.totalBalance})`}
            />
          </BalanceBox>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              marginTop: "18px",
              width: "99.4%",
            }}
          >
            <Stack
              direction={"row"}
              spacing={3}
              alignItems="flex-end"
              marginBottom={"10px"}
            >
              <CustomizedInputBase
                placeholder={CRYPTO_ASSETS_PAGE.placeholder}
                isTwoIconRequired={true}
                isIconRequired={false}
                isPasswordIconRequired={false}
                label={""}
                onChange={handleSearch}
                className="search"
                data-testid="search-tool"
              />
              <StyledInnerBox>
                <CustomTypography variant={"caption1"} label={"1M"} />
                <ArrowDropDownIcon />
              </StyledInnerBox>
            </Stack>
          </Stack>

          <MainDiv>
            {Object.values(walletData).map((item, index) => (
              <TransactionTableRow
                key={index}
                date={new Date(item.date)}
                transactionCryptoName={item.transactionCryptoName}
                otherUser={item.userName}
                quantity={item.quantity}
                availableBalance={item.availableBalance}
                transactionType={
                  item.transactionType.charAt(0) +
                  item.transactionType.substring(1).toLowerCase()
                }
              />
            ))}
          </MainDiv>
        </TabPanel>
      </Box>
    </Box>
  );

  return (
    <>
      <TradeTemplate
        content={tabContent}
        title={"Trade"}
        onClickAvatarIcon={() => {
          sessionStorage.setItem("email", "");
          logout();
        }}
        isButtonRequired={true}
        isSellButtonDisabled={sellDisable}
        isBuyButtonDisabled={false}
        onClickSellButton={handleOnClickSellButton}
        onClickBuyButton={handleOnClickBuyButton}
      />
    </>
  );
};

export default CryptoAssetsPage;
