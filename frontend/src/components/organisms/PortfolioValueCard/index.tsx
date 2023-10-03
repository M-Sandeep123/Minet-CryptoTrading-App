import { Box, Divider, Stack, styled } from "@mui/material";
import ChipList from "../../molecules/ChipList";
import { Fragment } from "react";
import StatGraph from "../TradeGraph";
import CustomTypography from "../../atoms/Typography";
import IconAtom from "../../atoms/Icon";
import StockDownArrow from "../../../../public/assets/icons/stockPointDownArrow.svg";
import StockUpArrow from "../../../../public/assets/icons/arrowUpRight.svg";
import infoIcon from "../../../../public/assets/icons/info.png";
import MyportfolioLabelIcons from "../../../../public/assets/icons/MyPortfolioLabelIcons.svg";
import NoReportDataImage from "../../../../public/assets/images/undraw_Data_report_Image.svg";
import theme from "../../../theme";
import { PORTFOLIO_CONTENT, chipData, timeLineData } from "../../../constants";
import Timeline from "../../molecules/Timeline";
import ImageAtom from "../../atoms/Image";

const BoxOne = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "4px",
});

const CustomDivider = styled(Divider)(({ theme }) => ({
  color: theme.palette.gamma_grey[500],
  height: "54px",
}));

const MainContainer = styled(Box)({
  display: "flex",
  gap: "24px",
});

const Values = (props: any) => {
  return (
    <MainContainer>
      <Stack>
        <BoxOne>
          <CustomTypography
            variant={"caption1"}
            label={props.totalInvestLabel}
            color={theme.palette.beta_text.medium_emphasis}
          />
          <IconAtom src={StockDownArrow} alt="" />
          <CustomTypography
            variant={"caption1"}
            label={props.totalInvestChange}
            color={theme.palette.gamma_error[500]}
          />
        </BoxOne>
        <CustomTypography
          label={props.totalInvestAmount}
          variant={"h6"}
          color={theme.palette.beta_text.high_emphasis}
        />
      </Stack>
      <CustomDivider orientation="vertical" />
      <Stack>
        <BoxOne>
          <CustomTypography
            variant={"caption1"}
            label={props.cryptoLabel}
            color={theme.palette.beta_text.high_emphasis}
          />
          <IconAtom src={StockUpArrow} alt="succes-arrow" />
          <CustomTypography
            variant={"caption1"}
            label={props.cryptoChange}
            color={theme.palette.gamma_success[500]}
          />
        </BoxOne>
        <CustomTypography
          label={props.cryptoAmount}
          variant={"h6"}
          color={theme.palette.beta_text.high_emphasis}
        />
      </Stack>
    </MainContainer>
  );
};

const StyledBoxContainer = styled(Box)({
  height: "422px",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
});

interface PropsType {
  graphData: any;
  totalInvestLabel: string;
  totalInvestChange: string;
  totalInvestAmount: string;
  cryptoLabel: string;
  cryptoChange: string;
  cryptoAmount: string;
  flagPointer: boolean;
}

const PortfolioStats = ({
  graphData,
  totalInvestAmount,
  totalInvestLabel,
  totalInvestChange,
  cryptoAmount,
  cryptoChange,
  cryptoLabel,
  flagPointer,
}: PropsType) => {
  return (
    <Stack gap={"14px"}>
      <Box display={"flex"}>
        <Box flexGrow={1}>
          <CustomTypography
            variant={"subtitle1"}
            label={PORTFOLIO_CONTENT.label}
            color={theme.palette.beta_text.high_emphasis}
          />
        </Box>
        <IconAtom src={MyportfolioLabelIcons} alt="label-icons" />
      </Box>
      {graphData !== null ? (
        <Fragment>
          <StatGraph
            graphData={graphData}
            flag={flagPointer}
            layoutWidth="96%"
            layoutHeight="275px"
            graphLayout={false}
            StockDataChange={
              <Values
                totalInvestLabel={totalInvestLabel}
                totalInvestChange={totalInvestChange}
                totalInvestAmount={totalInvestAmount}
                cryptoLabel={cryptoLabel}
                cryptoChange={cryptoChange}
                cryptoAmount={cryptoAmount}
              />
            }
          />
          <Box display={"flex"} gap={"12px"} flexDirection={"column"}>
            <Box display={"flex"}>
              <CustomTypography
                variant={"body1"}
                label={PORTFOLIO_CONTENT.activeCoins}
                sx={{ flexGrow: 1 }}
                color={theme.palette.beta_text.high_emphasis}
              />
              <Box display={"flex"} alignItems={"center"}>
                <IconAtom
                  src={infoIcon}
                  alt={PORTFOLIO_CONTENT.infoIconAltText}
                />
                <CustomTypography
                  variant={"caption2"}
                  label={PORTFOLIO_CONTENT.activeCoinsCaption}
                  color={theme.palette.beta_text.high_emphasis}
                />
              </Box>
            </Box>
            <Box>
              <ChipList chipListData={chipData} />
            </Box>
          </Box>
        </Fragment>
      ) : (
        <StyledBoxContainer>
          <Box display={"flex"} padding={"24px"}>
            <Box flexGrow={1}>
              <Stack gap={"8px"}>
                <Box display={"flex"} alignItems={"center"}>
                  <CustomTypography
                    variant={"caption1"}
                    label={PORTFOLIO_CONTENT.noReportMainLabel}
                    color={theme.palette.beta_text.medium_emphasis}
                  />
                  <IconAtom
                    src={StockUpArrow}
                    alt={PORTFOLIO_CONTENT.stockIconArrow}
                  />
                  <CustomTypography
                    variant={"overline"}
                    label={PORTFOLIO_CONTENT.noReportChangePercentage}
                    color={theme.palette.gamma_success[500]}
                  />
                </Box>
                <CustomTypography
                  variant={"h6"}
                  label={PORTFOLIO_CONTENT.noReportZeroBalance}
                  color={theme.palette.beta_text.high_emphasis}
                />
              </Stack>
            </Box>
            <Box>
              <Stack gap={"24px"}>
                <Timeline timeline={timeLineData} />
              </Stack>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <ImageAtom
              src={NoReportDataImage}
              alt={PORTFOLIO_CONTENT.noReportDataImageAlt}
            />
          </Box>
        </StyledBoxContainer>
      )}
    </Stack>
  );
};

export default PortfolioStats;
