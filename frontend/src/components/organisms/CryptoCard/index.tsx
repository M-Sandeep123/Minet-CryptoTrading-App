import React, { useEffect, useState } from "react";
import { Box, Card, Grid } from "@mui/material";
import ChooseCryptoCard from "../../molecules/ChooseCryptoCard";
import { CHOOSE_CRYPTO } from "../../../constants/index";
import CustomTypography from "../../atoms/Typography";
import styled from "@emotion/styled";
import { getCryptoCurrencyData } from "../../../../utils/services";
import { useUser } from "../../../store/user";

const StyledBox = styled(Box)({
  width: "100%",
  borderRadius: "4px",
  border: "1px solid #E8E8F7",
  background: "#FFF",
  height: "414px",
  padding: "24px",
  gap: "16px",
});

const StyledCard = styled(Card)({
  width: "100%",
  boxShadow: "0px 0px",
  height: "400px",
  gap: "16px",
  display: "flex",
  flexDirection: "column",
});

const MainDiv = styled.div({
  width: "100%",
  maxHeight: "350px",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
  },
});

interface CryptoCardProp {
  selectedCrypto?: any;
}

const CryptoCard = ({ selectedCrypto }: CryptoCardProp) => {
  const [cryptoData, setCryptoData] = useState([]);
  const { userInfo } = useUser();
  const fetchData = async () => {
    const tradeData = await getCryptoCurrencyData(userInfo.id);
    setCryptoData(tradeData.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StyledBox>
      <StyledCard>
        <CustomTypography
          variant={"body1"}
          label={CHOOSE_CRYPTO}
          sx={{ padding: "12px" }}
        />
        <MainDiv>
          <Grid container>
            {cryptoData.map((card: any) => (
              <Grid item xs={3} key={card.id}>
                <ChooseCryptoCard
                  cryptoCardSrc={card.cryptoSrc}
                  cryptoCardLabel={card.cryptoName}
                  cryptoCardDescription={`$ ${card.cryptoPrice}`}
                  cryptoCardSelected={selectedCrypto === card.cryptoLabel}
                  data-testid={`crypto-card-${card.cryptoLabel}`}
                />
              </Grid>
            ))}
          </Grid>
        </MainDiv>
      </StyledCard>
    </StyledBox>
  );
};

export default CryptoCard;
