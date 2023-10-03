import { Box, Stack } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import styled from "@emotion/styled";
import RecentTransactionRow from "../../molecules/RecentTransactionRow";
import AvatarAtom from "../../atoms/Avatar";
import usd from "../../../../public/assets/images/usdCoin.svg";
import { MyWalletOrg } from "../../../constants";
import theme from "../../../theme";
import ImageAtom from "../../atoms/Image";
import defaultTransaction from "../../../../public/assets/images/defaultTransactionsValue.svg";

const StyledBox = styled(Box)({
  width: "auto",
  height: "344px",
  display: "flex",
  flexDirection: "column",
  padding: "0px 0px 12px 0px",
  ".image": {
    alignItems: "center",
  },
  ".default-text": {
    width: "70%",
    textAlign: "center",
    paddingTop: "20px",
  },
});

const StyledHeaderBox = styled(Box)({
  width: "398px",
  height: "22px",
  padding: "24px 24px",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
});

const StyledCurrencyBox = styled(Box)({
  width: "398px",
  height: "12px",
  padding: "24px 24px",
  justifyContent: "space-between",
  display: "flex",
  flexDirection: "row",
});

const StyledTransactionBox = styled(Box)({
  width: "398px",
  height: "94px",
  padding: "10px 24px",
  gap: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export type TransactionDataType = {
  id: number;
  userId: number;
  date: Date;
  transactionCryptoName: string;
  otherUser: string;
  quantity: string;
  transactionType: string;
  availableBalance: string;
};

export interface MyWalletProps {
  usdCurrenyValue: string;
  transactiondata: TransactionDataType[];
  image?: boolean;
}

const MyWallet = ({
  usdCurrenyValue,
  transactiondata,
  image,
}: MyWalletProps) => {
  return (
    <StyledBox>
      <CustomTypography
        variant={"h6"}
        label={MyWalletOrg.walletLabel}
        sx={{ padding: "0px 24px" }}
        color={theme.palette.beta_text.high_emphasis}
      />
      <StyledCurrencyBox>
        <Box display="flex" flexDirection="row" gap="5px">
          <AvatarAtom src={usd}></AvatarAtom>
          <Stack direction="column">
            <CustomTypography
              variant={"body1"}
              label={MyWalletOrg.USDLabel}
              color={theme.palette.beta_text.high_emphasis}
            />
            <CustomTypography
              variant={"caption2"}
              label={MyWalletOrg.USDollar}
              color={theme.palette.beta_text.medium_emphasis}
            />
          </Stack>
        </Box>
        <CustomTypography
          variant={"body1"}
          label={usdCurrenyValue}
          color={theme.palette.beta_text.high_emphasis}
        />
      </StyledCurrencyBox>
      <StyledHeaderBox>
        <CustomTypography
          variant={"body1"}
          label={MyWalletOrg.walletTransaction}
          color={theme.palette.beta_text.high_emphasis}
        />
        <CustomTypography
          variant={"body2"}
          label={MyWalletOrg.walletViewAll}
          color={theme.palette.primary[500]}
        />
      </StyledHeaderBox>
      {image ? (
        <StyledTransactionBox>
          {transactiondata.map((item) => (
            <RecentTransactionRow
              key={item.id}
              transactionDate={item.date}
              cryptoName={item.transactionCryptoName}
              cryptoQuantity={item.quantity}
              currentBalance={item.availableBalance}
              transactionType={
                item.transactionType.charAt(0) +
                item.transactionType.substring(1).toLowerCase()
              }
            />
          ))}
        </StyledTransactionBox>
      ) : (
        <Stack className="image">
          <ImageAtom
            src={defaultTransaction}
            alt={"default Value"}
            width="70%"
            height="50%"
          />
          <CustomTypography
            label={MyWalletOrg.defaultValue}
            color={theme.palette.beta_text.medium_emphasis}
            variant={"caption2"}
            className="default-text"
          />
        </Stack>
      )}
    </StyledBox>
  );
};

export default MyWallet;
