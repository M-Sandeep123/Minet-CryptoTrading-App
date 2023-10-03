import React from "react";
import { Box, Stack, Divider, styled } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import ButtonAtom from "../../atoms/Button";
import StarIcon from "@mui/icons-material/Star";
import AvatarAtom from "../../atoms/Avatar";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import theme from "../../../theme";
import { ChooseCryptoCardConstants } from "../../../constants";

const StyledBox = styled(Box)({
  width: "99%",
  borderRadius: "4px",
  gap: "10px",
  border: "1px solid #E8E8F7",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  backgroundColor: theme.palette.primary.contrastText,
});

const StyledOuterBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  margin: "15px",
  alignItems: "center",
});

const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  alignItems: "center",
});

const StyledInnerMostBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "5px",
});

const StyledOuterStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export interface ITradeCardProps {
  iconSrc: string;
  coinName: string;
  coinLabel: string;
  coinValueChange: string;
  marketCap: string;
  volume: string;
  supply: string;
  onClick?: () => void;
}

const TradeHeader = ({
  iconSrc,
  coinName,
  coinLabel,
  coinValueChange,
  marketCap,
  volume,
  supply,
  onClick,
}: ITradeCardProps) => {
  return (
    <StyledBox>
      <StyledOuterStack>
        <StyledOuterBox>
          <StyledInnerBox>
            <AvatarAtom src={iconSrc} sx={{ width: "56px", height: "56px" }} />
            <Stack flexDirection="column">
              <CustomTypography
                variant={"h6"}
                label={coinName}
                fontSize={"20px"}
                marginTop={1.1}
                color={theme.palette.gamma_grey[500]}
              />
              <StyledInnerMostBox>
                <CustomTypography
                  variant={"caption2"}
                  label={coinLabel}
                  color={theme.palette.beta_text.medium_emphasis}
                />
                <ArrowOutwardIcon color="success" sx={{ width: "15px" }} />
                <CustomTypography
                  variant={"caption1"}
                  label={coinValueChange}
                  color={"green"}
                  fontSize={"10px"}
                />
              </StyledInnerMostBox>
            </Stack>
          </StyledInnerBox>
          <Divider orientation="vertical" flexItem />
          <Stack flexDirection="column" gap={0.8}>
            <CustomTypography
              variant="caption2"
              label={ChooseCryptoCardConstants.MARKET}
              sx={{
                color: theme.palette.beta_text.medium_emphasis,
                gap: "2px",
              }}
            />
            <CustomTypography
              variant={"caption1"}
              label={marketCap}
              color={theme.palette.beta_text.high_emphasis}
            />
          </Stack>
          <Stack flexDirection="column" gap={0.8}>
            <CustomTypography
              variant="caption2"
              label={ChooseCryptoCardConstants.HOURS}
              sx={{ color: theme.palette.beta_text.medium_emphasis }}
            />
            <CustomTypography
              variant={"caption1"}
              label={volume}
              color={theme.palette.beta_text.high_emphasis}
            />
          </Stack>
          <Stack flexDirection="column" gap={0.8}>
            <CustomTypography
              variant="caption2"
              label={ChooseCryptoCardConstants.SUPPLY}
              sx={{ color: theme.palette.beta_text.medium_emphasis }}
            />
            <CustomTypography
              variant={"caption1"}
              label={supply}
              color={theme.palette.beta_text.high_emphasis}
            />
          </Stack>
        </StyledOuterBox>
        <Box sx={{ margin: "15px" }}>
          <ButtonAtom
            buttonVariant={"outlined"}
            buttonLabel={ChooseCryptoCardConstants.WISHLIST}
            buttonStartIcon={<StarIcon />}
            buttonHeight={42}
            buttonWidth={215}
            buttonBorderRadius="4px"
            onClick={onClick}
          />
        </Box>
      </StyledOuterStack>
    </StyledBox>
  );
};

export default TradeHeader;
