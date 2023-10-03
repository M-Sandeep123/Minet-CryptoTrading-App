import { Box, Stack, styled } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import IconAtom from "../../atoms/Icon";
import TickMarkIcon from "../../../../public/assets/icons/transactionTickMark.svg";
import { TRANSACTION_TABLE_ROW } from "../../../constants";
import theme from "../../../theme";

interface PropsTypes {
  date: Date;
  transactionCryptoName: string;
  otherUser: string;
  quantity: string;
  availableBalance: string;
  transactionType: string;
}

const BoxContainer = styled(Box)({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  borderBottom: "1px solid #E8E8F7",
});

const Innercontainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "16px",
});

const InnerFromUserContainer = styled(Box)({
  display: "flex",
  gap: "12px",
});

const TransactionTypeContainer = styled(Box)(({ theme }) => ({
  height: "20px",
  padding: "0px 10px",
  backgroundColor: theme.palette.gamma_grey[50],
  textAlign: "center",
  borderRadius: "100px",
}));

const AmountDisplayContainer = styled(Stack)({
  marginLeft: "auto",
  alignItems: "flex-end",
  padding: "16px",
});

const TransactionTableRow = ({
  date,
  transactionCryptoName,
  otherUser,
  quantity,
  transactionType,
  availableBalance,
}: PropsTypes) => {
  const transactionDate = new Date(date);
  const month = transactionDate.toLocaleString("default", { month: "short" });
  const day = transactionDate.getDate();

  return (
    <BoxContainer>
      <Innercontainer>
        <Stack>
          <CustomTypography
            variant={"caption2"}
            label={month}
            color={theme.palette.beta_text.medium_emphasis}
          />
          <CustomTypography
            variant={"subtitle2"}
            label={day}
            color={theme.palette.beta_text.high_emphasis}
          />
        </Stack>
        <IconAtom
          src={TickMarkIcon}
          alt={TRANSACTION_TABLE_ROW.iconAlt}
          height="44px"
          width="44px"
        />
        <Stack>
          <CustomTypography
            variant={"body1"}
            label={transactionCryptoName}
            color={theme.palette.beta_text.high_emphasis}
          />
          <InnerFromUserContainer>
            <CustomTypography
              variant={"caption2"}
              label={`${otherUser}`}
              color={theme.palette.beta_text.medium_emphasis}
            />
            <TransactionTypeContainer>
              <CustomTypography
                variant={"caption2"}
                label={transactionType}
                color={theme.palette.beta_text.medium_emphasis}
              />
            </TransactionTypeContainer>
          </InnerFromUserContainer>
        </Stack>
      </Innercontainer>
      <AmountDisplayContainer>
        <CustomTypography
          variant={"body1"}
          label={quantity}
          color={theme.palette.beta_text.high_emphasis}
        />
        <CustomTypography
          variant={"caption2"}
          label={availableBalance}
          color={theme.palette.beta_text.medium_emphasis}
        />
      </AmountDisplayContainer>
    </BoxContainer>
  );
};

export default TransactionTableRow;
