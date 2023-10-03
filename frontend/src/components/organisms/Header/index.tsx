import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";
import React from "react";
import CustomTypography from "../../atoms/Typography";
import theme from "../../../theme";
import ButtonAtom from "../../atoms/Button";
import AvatarIcon from "../../molecules/AvatarIcon";
import AvatarImg from "/public/assets/images/avatar.png";
import DownArrowIcon from "/public/assets/icons/chevron-down.png";

export interface HeaderProps {
  title: string;
  onClickSellButton?: () => void;
  onClickBuyButton?: () => void;
  onClickAvatarIcon: () => void;
  isButtonRequired: boolean;
  isSellButtonDisabled: boolean;
  isBuyButtonDisabled: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onClickSellButton,
  onClickBuyButton,
  onClickAvatarIcon,
  isButtonRequired,
  isSellButtonDisabled,
  isBuyButtonDisabled,
  ...props
}) => {
  const handleSellButtonClick = () => {
    if (!isSellButtonDisabled && onClickSellButton) {
      onClickSellButton();
    }
  };

  const handleBuyButtonClick = () => {
    if (!isBuyButtonDisabled && onClickBuyButton) {
      onClickBuyButton();
    }
  };

  const StyledButton = styled(ButtonAtom)({
    variant: "body1",
    fontWeight: "bold",
  });
  return (
    <StyledOuterBox>
      <Box flexGrow={1}>
        <CustomTypography
          variant={"h6"}
          label={title}
          color={theme.palette.beta_text.high_emphasis}
          data-testid="header-title"
        />
      </Box>
      <StyledInnerLeftBox>
        <StyledInnerButtonBox data-testid="header-buttons">
          {isButtonRequired && (
            <>
              <StyledButton
                buttonVariant={"contained"}
                buttonWidth={120}
                buttonHeight={42}
                buttonLabel={
                  <CustomTypography variant={"button"} label={"SELL"} />
                }
                buttonColor="#FFFFFF"
                buttonBgColor={theme.palette.gamma_warning[300]}
                buttonBorder="1px"
                buttonBorderRadius="4px"
                onClick={handleSellButtonClick}
                data-testid="header-sell-button"
              />
              <StyledButton
                buttonVariant={"contained"}
                buttonWidth={120}
                buttonHeight={42}
                buttonLabel={
                  <CustomTypography variant={"button"} label={"BUY"} />
                }
                buttonColor="#FFFFFF"
                buttonBgColor={theme.palette.primary[500]}
                buttonBorder="1px"
                buttonBorderRadius="4px"
                onClick={handleBuyButtonClick}
                data-testid="header-buy-button"
              />{" "}
            </>
          )}
        </StyledInnerButtonBox>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          data-testid="header-divider"
        />
        <StyledAvatarIcon onClick={onClickAvatarIcon}>
          <AvatarIcon
            avatarSrc={AvatarImg}
            iconSrc={DownArrowIcon}
            avatarAlt={"avatarImage"}
            iconAlt={"downIcon"}
            data-testid="header-avatar-icon"
          ></AvatarIcon>
        </StyledAvatarIcon>
      </StyledInnerLeftBox>
    </StyledOuterBox>
  );
};

export default Header;

const StyledOuterBox = styled(Box)({
  height: "100%",
  minWidth: "96.8%",
  paddingLeft: "24px",
  paddingRight: "24px",
  paddingTop: "15px",
  paddingBottom: "15px",
  background: "white",
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "space-between",
});

const StyledInnerLeftBox = styled(Box)({
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "21px",
  display: "flex",
});
const StyledInnerButtonBox = styled(Box)({
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "12px",
  display: "flex",
});

const StyledAvatarIcon = styled(Box)({
  justifyContent: "flex-start",
  alignItems: "center",
  display: "flex",
  cursor: "pointer",
});
