import { Box, Paper, Stack, styled } from "@mui/material";
import Header from "../../organisms/Header";
import { NavBar } from "../../organisms/NavBar";
import Footer from "../../molecules/Footer";

export const StyledHeader = styled(Paper)({
  display: "inline-flex",
  justifyContent: "space-between",
  flexDirection: "column",
  height: "0%",
  width: "100%",
  overflow: "hidden",
  boxShadow: "0px 0.1px 0px",
  borderRadius: "0px",
});

export const NavLayout = styled(Box)({
  boxShadow: "0.1px 0px 0px",
  borderRadius: "0px",
  padding: "8.05px",
  height: "98vh",
});

export const StyledFooter = styled(Paper)({
  position: "fixed",
  bottom: "0px",
  left: "80px",
  width: "94%",
  boxShadow: "0px -0.2px",
  height: "42.02px",
  padding: "12px",
  borderRadius: "0px",
});

export const BodyLayout = styled(Box)({
  flexDirection: "column",
  height: "100%",
  width: "100%",
});

interface PropsType {
  content: React.ReactElement;
  onClickAvatar: () => void;
}

const PaymentTemplate = ({ content, onClickAvatar }: PropsType) => {
  return (
    <Stack>
      <Box display={"flex"}>
        <NavLayout>
          <NavBar />
        </NavLayout>
        <BodyLayout>
          <StyledHeader>
            <Header
              title={"Dashboard"}
              onClickAvatarIcon={onClickAvatar}
              isButtonRequired={true}
              isSellButtonDisabled={true}
              isBuyButtonDisabled={false}
            />
          </StyledHeader>
          {content}
        </BodyLayout>
        <StyledFooter>
          <Footer />
        </StyledFooter>
      </Box>
    </Stack>
  );
};

export default PaymentTemplate;
