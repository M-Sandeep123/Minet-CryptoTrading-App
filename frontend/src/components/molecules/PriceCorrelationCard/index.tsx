import React from "react";
import { Grid, Box } from "@mui/material";
import ImageAtom from "../../atoms/Image";
import CustomTypography from "../../atoms/Typography";
import styled from "@emotion/styled";
import theme from "../../../theme";

export interface CardData {
  cardSrc: string;
  cardLabel: string;
  cardContent: string;
  cardPrize: string;
  cardPercentage: string;
}

export interface PriceCorrelationCardProps {
  priceCorrelationsData: CardData[];
}

const StyledBox = styled(Box)({
  width: "420px",
  height: "260px",
  margin: "auto",
  padding: "16px 0px 16px 2px",
  borderRadius: "4px",
  border: "1px solid lightgrey",
  gap: "16px",
  "& ::-webkit-scrollbar": {
    width: "2px",
  },
  overflow: "hidden",
});

const StyledInnerBox = styled(Box)((theme) => ({
  width: "370px",
  height: "58px",
  gap: "4px",
  boxShadow: "1px lightgrey",
  padding: "8px 12px 2px 24px",
  verticalAlign: "center",
  justify: "space-between",
  margin: "2px",
}));

const MainDiv = styled.div({
  width: "100%",
  maxHeight: "250px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
  },
});

export const PriceCorrelationCard = ({
  priceCorrelationsData,
}: PriceCorrelationCardProps) => {
  return (
    <StyledBox>
      <CustomTypography
        variant={"subtitle1"}
        label={"Price correlation with"}
        sx={{ marginLeft: "24px" }}
        color={theme.palette.beta_text.high_emphasis}
      />
      <MainDiv>
        {priceCorrelationsData.map((option) => (
          <StyledInnerBox key={option.cardLabel}>
            <Box>
              <Grid container spacing={2}>
                <Grid item>
                  <ImageAtom
                    src={option.cardSrc}
                    alt={option.cardLabel}
                    width="42px"
                    height="42px"
                  />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <CustomTypography
                        variant={"body1"}
                        label={option.cardLabel}
                        color={theme.palette.beta_text.high_emphasis}
                      />
                      <CustomTypography
                        variant={"body2"}
                        label={option.cardContent}
                        color={theme.palette.beta_text.medium_emphasis}
                      />
                    </Grid>
                  </Grid>
                  <Grid item textAlign="right">
                    <CustomTypography
                      variant={"body1"}
                      label={option.cardPrize}
                      color={theme.palette.beta_text.high_emphasis}
                    />
                    <CustomTypography
                      variant={"body2"}
                      label={option.cardPercentage}
                      color={theme.palette.beta_text.medium_emphasis}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </StyledInnerBox>
        ))}
      </MainDiv>
    </StyledBox>
  );
};

export default PriceCorrelationCard;
