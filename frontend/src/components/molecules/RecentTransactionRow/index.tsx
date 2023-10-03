import { Box, Stack, styled } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import IconAtom from "../../atoms/Icon";
import TickMarkIcon from "../../../../public/assets/icons/transactionTickMark.svg";
import { TRANSACTION_TABLE_ROW } from "../../../constants";
import theme from "../../../theme";

interface RecentTransactionPropsTypes {
  transactionDate: Date;
  cryptoName: string;
  cryptoQuantity: string;
  currentBalance: string;
  transactionType: string;
}

const Layout = styled(Stack)({
  maxHeight: "72px",
  maxWidth: "398px",
  gap: "8px",
});

const InnerLayout = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  flexGrow: 1,
});

const TransactionTypeContainer = styled(Box)(({ theme }) => ({
  height: "20px",
  backgroundColor: theme.palette.gamma_grey[100],
  textAlign: "center",
  padding: "0px 10px",
  borderRadius: "100px",
}));

const AmountContainer = styled(Stack)({
  marginLeft: "auto",
  alignItems: "flex-end",
});

const RecentTransactionRow = ({
  transactionDate,
  cryptoName,
  cryptoQuantity,
  transactionType,
  currentBalance,
}: RecentTransactionPropsTypes) => {
  const date = new Date(transactionDate);
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  return (
    <Layout>
      <CustomTypography
        variant={"caption2"}
        label={month + " " + day}
        color={theme.palette.beta_text.high_emphasis}
      />
      <InnerLayout>
        <IconAtom
          src={TickMarkIcon}
          alt={TRANSACTION_TABLE_ROW.iconAlt}
          height="44px"
          width="44px"
        />
        <Stack spacing={0.5}>
          <CustomTypography
            variant={"body1"}
            label={cryptoName}
            color={theme.palette.beta_text.high_emphasis}
          />
          <TransactionTypeContainer>
            <CustomTypography
              variant={"caption2"}
              label={transactionType}
              color={theme.palette.gamma_grey[500]}
            />
          </TransactionTypeContainer>
        </Stack>
        <AmountContainer>
          <CustomTypography
            variant={"body1"}
            label={cryptoQuantity}
            color={theme.palette.beta_text.high_emphasis}
          />
          <CustomTypography
            variant={"caption2"}
            label={currentBalance}
            color={theme.palette.beta_text.medium_emphasis}
          />
        </AmountContainer>
      </InnerLayout>
    </Layout>
  );
};

export default RecentTransactionRow;
