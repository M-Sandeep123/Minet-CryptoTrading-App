import { Card, Divider, Stack, styled } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import { BUY_NOW_CARD } from "../../../constants";
import TypographyWithIcon from "../../molecules/TypographyWithIcon";
import buyOne from "../../../../public/assets/icons/buyOne.svg";
import buyTwo from "../../../../public/assets/icons/buyTwo.svg";
import buyThree from "../../../../public/assets/icons/buyThree.svg";
import buyZero from "../../../../public/assets/icons/buyZero.svg";
import sellOne from "../../../../public/assets/icons/sellOne.svg";
import theme from "../../../theme";
import ButtonAtom from "../../atoms/Button";

const StyledCard = styled(Card)({
  width: "100%",
  height: "70%",
  borderRadius: "4px",
  boxShadow: "0px 0px",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
});

const StyledStackHeading = styled(Stack)({
  width: "100%",
  padding: "24px 0px 8px 0px",
  borderRadius: "4px 4px 0px 0px",
  gap: "12px",
  textAlign: "center",
  justifyContent: "center",
});
const StyledStackTimeline = styled(Stack)({
  width: "100%",
  padding: "24px 0px 0px 24px",
  gap: "8px",
});

const StyledStackTotal = styled(Stack)({
  width: "95%",
  padding: "24px 24px",
  gap: "24px",
});

const StyledDivider = styled(Divider)({
  border: "1px dashed",
  width: "70%",
  height: "0.1px",
  margin: "10px 0",
  color: theme.palette.gamma_grey[300],
});
export interface BuyNowCardProps {
  isBuying: boolean;
  coinQty: string;
  coinValue: string;
  paymentMethod: string;
  deliveryFees: string;
  depositTo: string;
  priceOfQty: string;
  transactionFee: string;
  total: string;
  buttonLabel: string;
  buttonDisable?: boolean;
  onClick?: () => void;
}

interface TimelineCardProps {
  src: string;
  headLabel: string;
  subHeadLabel: string;
}

const TimelineCard = ({ src, headLabel, subHeadLabel }: TimelineCardProps) => {
  return (
    <TypographyWithIcon
      src={src}
      width="42px"
      height="42px"
      variant1={"caption2"}
      label1={headLabel}
      color1={theme.palette.beta_text.medium_emphasis}
      sx={{ display: "flex", alignItems: "center", padding: "10px 0" }}
      typography2={
        <CustomTypography
          variant="body1"
          label={subHeadLabel}
          color={theme.palette.beta_text.high_emphasis}
        />
      }
    />
  );
};

const BuyNowCard = ({
  isBuying,
  coinQty,
  coinValue,
  paymentMethod,
  deliveryFees,
  depositTo,
  priceOfQty,
  transactionFee,
  total,
  buttonLabel,
  buttonDisable,
  onClick,
}: BuyNowCardProps) => {
  return (
    <StyledCard>
      <StyledStackHeading>
        <CustomTypography
          variant={"caption1"}
          color={theme.palette.beta_text.medium_emphasis}
          label={
            isBuying
              ? BUY_NOW_CARD.headingBuyLabel
              : BUY_NOW_CARD.headingSellLabel
          }
        />
        <CustomTypography
          variant={"h6"}
          label={coinQty}
          color={theme.palette.beta_text.high_emphasis}
        />
        <CustomTypography
          variant={"caption1"}
          color={theme.palette.beta_text.medium_emphasis}
          label={coinValue}
          data-testid="coin-value"
        />
      </StyledStackHeading>
      <Divider />
      <StyledStackTimeline>
        <TimelineCard
          src={isBuying ? buyOne : buyThree}
          headLabel={
            isBuying
              ? BUY_NOW_CARD.paymentBuyLabel
              : BUY_NOW_CARD.paymentSellLabel
          }
          subHeadLabel={paymentMethod}
          data-testid="card-zero"
        />
        <Divider
          sx={{
            borderLeft: "1px dashed grey",
            height: " 25px",
            margin: "0 20px",
            borderRight: "none",
          }}
          flexItem
          orientation="vertical"
        />
        <TimelineCard
          src={buyTwo}
          headLabel={BUY_NOW_CARD.deliveryLabel}
          subHeadLabel={deliveryFees}
          data-testid="card-one"
        />
        <Divider
          sx={{
            borderLeft: "1px dashed grey",
            height: " 25px",
            margin: "0 20px",
            borderRight: "none",
          }}
          flexItem
          orientation="vertical"
        />
        <TimelineCard
          src={isBuying ? buyZero : sellOne}
          headLabel={BUY_NOW_CARD.despositLabel}
          subHeadLabel={depositTo}
          data-testid="card-two"
        />
      </StyledStackTimeline>
      <Divider sx={{ padding: "10px", color: "grey" }} />
      <StyledStackTotal>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomTypography
            variant="overline"
            label={coinQty}
            color={theme.palette.beta_text.high_emphasis}
          />
          <StyledDivider orientation="horizontal" flexItem />
          <CustomTypography
            variant="overline"
            label={priceOfQty}
            color={theme.palette.beta_text.high_emphasis}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomTypography
            variant="overline"
            label={BUY_NOW_CARD.transactionFeeLabel}
            color={theme.palette.beta_text.high_emphasis}
            sx={{ textTransform: "none" }}
          />
          <StyledDivider orientation="horizontal" flexItem />
          <CustomTypography
            variant="overline"
            label={transactionFee}
            color={theme.palette.beta_text.high_emphasis}
          />
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CustomTypography
            variant="body1"
            label={BUY_NOW_CARD.totalLabel}
            color={theme.palette.beta_text.high_emphasis}
          />
          <StyledDivider orientation="horizontal" flexItem />
          <CustomTypography
            variant="body1"
            label={total}
            color={theme.palette.beta_text.high_emphasis}
          />
        </Stack>
        <ButtonAtom
          buttonVariant="contained"
          buttonLabel={buttonLabel}
          buttonBgColor={
            isBuying
              ? theme.palette.primary[500]
              : theme.palette.gamma_warning[300]
          }
          onClick={onClick}
          disabled={buttonDisable}
        />
      </StyledStackTotal>
    </StyledCard>
  );
};

export default BuyNowCard;
