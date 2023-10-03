import { Grid, Box, Stack, Divider } from "@mui/material";
import ImageAtom from "../../atoms/Image";
import CustomTypography from "../../atoms/Typography";
import styled from "@emotion/styled";
import list from "/public/assets/icons/list.png";
import chart from "/public/assets/icons/chart.png";
import theme from "../../../theme";
import { myPortfoliomessages } from "../../../constants";
import Bitcoin from "../../../../public/assets/images/bitCoin.png";
import Ethereum from "../../../../public/assets/images/ethereum.png";
import Ethereum2 from "../../../../public/assets/images/ethereum2.png";
import Tether from "../../../../public/assets/images/tether.svg";
import bitCoinCoin from "../../../../public/assets/images/bitcoinCoin.png";
import Cardano from "../../../../public/assets/images/cardano.png";
import xrp from "../../../../public/assets/images/xrp.svg";
import DodgeCoin from "../../../../public/assets/images/DodgeCoin.png";
import UsdCoin from "../../../../public/assets/images/usd.png";

interface PortfolioProps {
  totalbalance: number;
  portfolioData: any;
}

export const getImage = (pathname: string): string => {
  switch (pathname) {
    case "bitCoin.png":
      return Bitcoin;
    case "ethereum.png":
      return Ethereum;
    case "tether.svg":
      return Tether;
    case "xrp.svg":
      return xrp;
    case "ethereum2.png":
      return Ethereum2;
    case "cardano.png":
      return Cardano;
    case "DodgeCoin.png":
      return DodgeCoin;
    case "bitcoinCoin.png":
      return bitCoinCoin;
    default:
      return UsdCoin;
  }
};

export const MyPortfolio = (props: PortfolioProps) => {
  return (
    <>
      <StyledBox>
        <PortfolioStack direction="row">
          <CustomTypography
            variant={"subtitle1"}
            label={myPortfoliomessages.MY_PORTFOLIO}
            color={theme.palette.beta_text.high_emphasis}
          />
          <Stack direction="row">
            <ImageAtom src={chart} alt={chart} width="32px" height="32px" />
            <ImageAtom src={list} alt={list} width="32px" height="32px" />
          </Stack>
        </PortfolioStack>
        <MainDiv>
          {props.portfolioData.map((option: any) => (
            <StyledInnerBox key={option.coinName}>
              <Grid container spacing={2}>
                <Grid item>
                  <ImageAtom
                    src={getImage(option.coinSrc)}
                    alt={option.coinName}
                    width="42px"
                    height="42px"
                  />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <CustomTypography
                        variant={"body1"}
                        label={option.coinName}
                        color={theme.palette.beta_text.high_emphasis}
                      />
                      <CustomTypography
                        variant={"caption2"}
                        label={option.coinCaption}
                        color={theme.palette.beta_text.medium_emphasis}
                      />
                    </Grid>
                  </Grid>
                  <Grid item textAlign="right">
                    <CustomTypography
                      variant={"body1"}
                      label={`$ ${option.coinPrice}`}
                      color={theme.palette.beta_text.high_emphasis}
                    />
                    <CustomTypography
                      variant={"body2"}
                      label={option.coinChange}
                      color={
                        option.coinChange.includes("+")
                          ? theme.palette.gamma_success[500]
                          : theme.palette.gamma_error[500]
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            </StyledInnerBox>
          ))}
        </MainDiv>
        <OuterStack>
          <CustomDivider />
          <TotalBalanceStack direction="row">
            <CustomTypography
              variant="body1"
              label={myPortfoliomessages.TOTAL_BALANCE}
              color={theme.palette.beta_text.medium_emphasis}
            />
            <CustomTypography
              variant="body1"
              label={`$ ${props.totalbalance}`}
              color={theme.palette.beta_text.high_emphasis}
            />
          </TotalBalanceStack>
          <CustomDivider />
        </OuterStack>
      </StyledBox>
    </>
  );
};

const StyledBox = styled(Box)({
  width: "420px",
  flexGrow: 1,
  padding: "0px 0px 16px 2px",
  borderRadius: "4px",
  gap: "16px",
});

const StyledInnerBox = styled(Box)((theme) => ({
  width: "370px",
  height: "58px",
  gap: "4px",
  padding: "8px 12px 2px 24px",
  margin: "2px",
  background: "#FFF",
  "&:hover": {
    boxShadow: "0px 1px 10px 0px rgba(44, 44, 44, 0.08)",
  },
}));

const MainDiv = styled.div({
  width: "100%",
  maxHeight: "250px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "5px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
  },
});
const PortfolioStack = styled(Stack)({
  display: "flex",
  width: "398px",
  padding: "0px 12px",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "12px",
});
const TotalBalanceStack = styled(Stack)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});
const OuterStack = styled(Stack)({
  gap: "24px",
  paddingLeft: "12px",
  paddingRight: "12px",
  paddingTop: "12px",
});
const CustomDivider = styled(Divider)({
  height: "2px",
  color: theme.palette.gamma_grey[100],
});
