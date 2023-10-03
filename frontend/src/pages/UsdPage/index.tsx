import * as React from "react";
import Tab from "@mui/material/Tab";
import bitcoin from "../../../public/assets/images/bitCoin.png";
import { DropDownTimeData, CRYPTO_ASSETS_PAGE } from "../../constants";
import { styled, Box, Paper, Stack } from "@mui/material";
import CustomTypography from "../../components/atoms/Typography";
import TradeTemplate from "../../components/templates/TradeTemplate";
import TransactionTableRow from "../../components/molecules/TransactionTableRow";
import Dropdown from "../../components/atoms/Dropdown";
import CustomizedInputBase from "../../components/atoms/TextField";
import theme from "../../theme";
import UsdCard from "../../components/molecules/UsdCard";
import { getWalletDetails } from "../../../utils/services";
import { useUser } from "../../store/user";
import { useAuth0 } from "@auth0/auth0-react";

const StyledPaper = styled(Paper)({
  top: "106px",
  left: "104px",
  gap: "24px",
  boxShadow: "none",
});

const MainDiv = styled(Paper)({
  maxHeight: "590px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
  },
  boxShadow: "none",
  border: "1px solid #E8E8F7",
  width: "99.5%",
  backgroundColor: theme.palette.primary.contrastText,
});

export const StyledTextField = styled(CustomizedInputBase)({
  height: "48.01px",
  width: "348px",
  borderRadius: "8px",
  "& .MuiInputBase-input": {
    ...theme.typography.caption2,
    color: "#343446",
  },
});

const BalanceBox = styled(Box)({
  width: "97%",
  height: "10%",
  padding: "16px 20px",
  borderRadius: "4px",
  backgroundColor: "#F2F2F7",
});

const CustomSelect = styled(Dropdown)({
  ...theme.typography.body1,
  color: theme.palette.gamma_grey[500],
});

const TradeWalletUSDPage = () => {
  const { logout } = useAuth0();
  const { userInfo } = useUser();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [apiWalletData, setApiWalletData] = React.useState([]);

  const handleSearch = (event: any) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);
  };

  React.useEffect(() => {
    const getApiData = async () => {
      const apiWalletDetails = await getWalletDetails();
      const filterData = apiWalletDetails.data.filter(
        (data: any) => data.userId === userInfo.id
      );
      setApiWalletData(filterData);
    };
    getApiData();
  }, []);

  const tabContent = (
    <React.Fragment>
      <StyledPaper>
        <UsdCard disableButton={false} />
      </StyledPaper>
      <Box sx={{ width: "100%" }}>
        <Tab label="Wallets" />
        <BalanceBox
          display="flex"
          flexDirection="row"
          gap={2}
          justifyContent="space-between"
        >
          <CustomTypography variant={"h6"} label={CRYPTO_ASSETS_PAGE.balance} />
          <CustomTypography variant={"h6"} label={`$ ${userInfo.balance}`} />
        </BalanceBox>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Stack
            direction={"row"}
            spacing={3}
            alignItems="flex-end"
            margin={"10px"}
          >
            <StyledTextField
              isTwoIconRequired={true}
              isIconRequired={false}
              placeholder={"Search all assets"}
              isPasswordIconRequired={false}
              label={""}
              onChange={handleSearch}
            />
            <CustomSelect
              initialValue={CRYPTO_ASSETS_PAGE.initalValue}
              options={DropDownTimeData}
            />
          </Stack>
        </Box>
        <MainDiv>
          {apiWalletData
            .filter((data: any) =>
              data.transactionCryptoName.includes(searchQuery)
            )
            .map((item: any, index) => (
              <TransactionTableRow
                key={index}
                date={item.date}
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
      </Box>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <TradeTemplate
        content={tabContent}
        title={"Trade"}
        onClickAvatarIcon={() => {
          sessionStorage.setItem("email", "");
          logout();
        }}
        isButtonRequired={true}
        isSellButtonDisabled={false}
        isBuyButtonDisabled={false}
      />
    </React.Fragment>
  );
};

export default TradeWalletUSDPage;
