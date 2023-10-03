import React from "react";
import theme from "../../../theme";
import styled from "@emotion/styled";
import IconAtom from "../../atoms/Icon";
import { Box, Stack } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import tick from "../../../../public/assets/images/transactionState.svg";

export interface ChooseCryptoCardProps {
  cryptoCardSrc: string;
  cryptoCardLabel: string;
  cryptoCardDescription: string;
  cryptoCardSelected?: boolean;
  onClick?: () => void;
}

const StyledStack = styled(Stack)({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  paddingTop: "40px",
  paddingBottom: "40px",
});

const StyledBox = styled(Box)({
  width: "90%",
  height: "100%",
  borderRadius: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",
});

const TickIcon = styled(IconAtom)({
  position: "absolute",
  top: "8px",
  right: "5px",
});

const ChooseCryptoCard = ({
  cryptoCardSrc,
  cryptoCardLabel,
  cryptoCardDescription,
  cryptoCardSelected,
  onClick,
}: ChooseCryptoCardProps) => (
  <StyledBox
    data-testid="styled-box"
    sx={{ border: cryptoCardSelected ? "2px solid blue" : "none" }}
    key={cryptoCardLabel}
    onClick={onClick}
  >
    <StyledStack>
      <IconAtom
        src={cryptoCardSrc}
        alt={cryptoCardLabel}
        width="32px"
        height="32px"
        style={{ paddingBottom: "3px" }}
      />
      <CustomTypography
        variant={"body1"}
        label={cryptoCardLabel}
        color={`${theme.palette.gamma_grey[500]}`}
      />
      <CustomTypography
        variant={"caption1"}
        label={cryptoCardDescription}
        color={`${theme.palette.beta_text.medium_emphasis}`}
      />
    </StyledStack>
    {cryptoCardSelected && (
      <TickIcon src={tick} width="31.41px" height="30.44px" />
    )}
  </StyledBox>
);

export default ChooseCryptoCard;
