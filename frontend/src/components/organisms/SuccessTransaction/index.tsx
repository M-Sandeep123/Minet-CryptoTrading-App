import { Box, Stack, styled } from "@mui/material";
import ButtonAtom from "../../atoms/Button";
import { SUCCESS_TRANSACTION } from "../../../constants";
import CustomTypography from "../../atoms/Typography";
import theme from "../../../theme";
import ImageAtom from "../../atoms/Image";
import successImg from "../../../../public/assets/images/success.svg";
interface SuccessTransactionProps {
  isTransactionBuy?: boolean;
  onClickCrypto?: () => void;
  onClickUSD?: () => void;
  quantity?: string;
  currency?: string;
}
export const SuccessTransaction = ({
  isTransactionBuy,
  quantity,
  currency,
  onClickCrypto,
  onClickUSD,
}: SuccessTransactionProps) => {
  return (
    <Wrapper>
      <Stack className="outerStack">
        <StyleBox>
          <ImageAtom
            src={successImg}
            alt="success"
            width={"30.72px"}
            height={"30.72px"}
          />
        </StyleBox>
        <Stack className="description">
          <Stack direction="row" spacing={2}>
            <CustomTypography
              variant={"h4"}
              label={quantity}
              color={theme.palette.beta_text.high_emphasis}
            />
            <CustomTypography
              variant={"h4"}
              label={currency}
              color={theme.palette.beta_text.high_emphasis}
            />
          </Stack>
          <Box className="text">
            <CustomTypography
              variant={"body2"}
              label={
                isTransactionBuy
                  ? SUCCESS_TRANSACTION.buyDescription
                  : SUCCESS_TRANSACTION.sellDescription
              }
              color={theme.palette.beta_text.high_emphasis}
            />
          </Box>
        </Stack>
        <Stack direction="row" className="buttonStack">
          <ButtonAtom
            buttonVariant={"outlined"}
            buttonLabel={
              isTransactionBuy
                ? SUCCESS_TRANSACTION.buyButtonLabel
                : SUCCESS_TRANSACTION.sellButtonLabel
            }
            buttonWidth={125}
            buttonHeight={42}
            buttonBorderRadius={"4px"}
            onClick={onClickCrypto}
          />
          <ButtonAtom
            buttonVariant={"contained"}
            buttonLabel={SUCCESS_TRANSACTION.UsdButtonLabel}
            buttonHeight={42}
            buttonWidth={151}
            buttonBorderRadius={"4px"}
            onClick={onClickUSD}
          />
        </Stack>
      </Stack>
    </Wrapper>
  );
};
const Wrapper = styled(Box)(`
width: 1366px;
height: 728px;
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content:space-around;
gap: 44px;
justify-content:space-around;
.outerStack{
display: inline-flex;
flex-direction: column;
align-items: center;
gap: 24px;
}
.buttonStack{
display: flex;
padding: 0px 16px;
justify-content: center;
align-items: center;
gap: 10px;
}
.description{
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;

}
.text{
  width:322px;
  text-align:center;
}
`);
const StyleBox = styled(Box)({
  background: theme.palette.gamma_success[100],
  borderRadius: "32px",
  width: "64px",
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
