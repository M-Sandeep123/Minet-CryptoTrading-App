import { Box, Stack, styled } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import ButtonAtom from "../../atoms/Button";
import theme from "../../../theme";
import Slider from "../../atoms/Slider";
import { useState } from "react";
import { AMOUNT_DETAILS, PAGE_LABELS } from "../../../constants";

const StyledInnerAmountBox = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "16px",
  border: `solid 1px ${theme.palette.gamma_grey[100]}`,
  alignItems: "center",
  borderRadius: "4px",
  height: "19.81px",
}));

const StyledLayout = styled(Stack)({
  padding: "24px",
  gap: "12px",
  background: "#FFF",
});

const SliderBoxLayout = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

const StyledTypography = styled(CustomTypography)({
  marginLeft: "25px",
});

const StyledAmountTypography = styled(CustomTypography)({
  flexGrow: 1,
});

const StyledSlider = styled(Slider)({
  marginLeft: "30px",
});

interface PropsType {
  cryptoLabel: string;
  cryptoPrice: number;
  isBuyButton: boolean;
  buttonLabel: string;
  accountBalance: number;
  price?: number;
  getSelectQuantity: (e: number) => void;
}

const AmountDetail = ({
  cryptoLabel,
  cryptoPrice,
  accountBalance,
  price,
  isBuyButton,
  buttonLabel,
  getSelectQuantity,
}: PropsType) => {
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const [slideValue, setSlideValue] = useState<number>(0);

  const handleSlideChange = (value: number) => {
    const decimalPercentage = value / 100;
    const cryptoQuantity = decimalPercentage * (accountBalance / cryptoPrice);
    const cryptoSelectedQuantity = parseFloat(cryptoQuantity + "").toFixed(6);
    const updatedValue = Number(cryptoSelectedQuantity);
    setSelectedValue(updatedValue);
    setSlideValue(value);
    getSelectQuantity(updatedValue);
  };
  const handleonClick = () => {
    setSlideValue(100);
    handleSlideChange(100);
  };
  return (
    <StyledLayout>
      <Box>
        <CustomTypography
          variant={"body1"}
          label={AMOUNT_DETAILS.headerLabel}
        />
      </Box>
      <Stack>
        <StyledInnerAmountBox>
          <StyledAmountTypography
            variant={"subtitle1"}
            label={isBuyButton ? `$ ${price}` : selectedValue}
            color={theme.palette.beta_text.high_emphasis}
          />

          <ButtonAtom
            buttonVariant={"outlined"}
            buttonLabel={buttonLabel}
            onClick={handleonClick}
            buttonHeight={42}
            sx={{ padding: "0px 12.33px" }}
          />
        </StyledInnerAmountBox>
        <SliderBoxLayout>
          <StyledSlider value={slideValue} getSlideValue={handleSlideChange} />
          <StyledTypography
            variant={"caption1"}
            label={`1 ${cryptoLabel} = $ ${cryptoPrice}`}
            color={theme.palette.beta_text.medium_emphasis}
          />
        </SliderBoxLayout>
        <StyledInnerAmountBox>
          <StyledAmountTypography
            variant={"subtitle1"}
            label={isBuyButton ? selectedValue : `$${accountBalance}`}
            color={theme.palette.beta_text.high_emphasis}
          />
          <CustomTypography
            variant={"body1"}
            label={isBuyButton ? cryptoLabel : PAGE_LABELS.USD_COIN}
            color={theme.palette.beta_text.medium_emphasis}
          />
        </StyledInnerAmountBox>
      </Stack>
    </StyledLayout>
  );
};

export default AmountDetail;
