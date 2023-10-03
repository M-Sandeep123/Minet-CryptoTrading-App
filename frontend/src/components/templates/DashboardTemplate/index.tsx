import { Box, Stack, styled } from "@mui/material";
import Header from "../../organisms/Header";
import { NavBar } from "../../organisms/NavBar";
import Footer from "../../molecules/Footer";
import { StyledHeader, BodyLayout, NavLayout, StyledFooter } from "../PaymentTemplate";

const StyledBox = styled(Box)({
  width: "1300px",
  height: "660px",
});

const StyledInnerBox = styled(Box)({
  width: "410px",
  height: "805px",
  border: "4px",
});

export interface PropsType {
  rightContent: React.ReactElement;
  leftContent: React.ReactElement;
  onClickAvatar: () => void;
}

const DashboardTemplate = ({
  leftContent,
  rightContent,
  onClickAvatar,
}: PropsType) => {
  return (
    <Stack>
      <Box display={"flex"} gap="15px">
        <NavLayout data-testid="nav-bar">
          <NavBar />
        </NavLayout>
        <BodyLayout>
          <StyledHeader data-testid="header">
            <Header
              title={"Dashboard"}
              onClickAvatarIcon={onClickAvatar}
              isButtonRequired={true}
              isSellButtonDisabled={true}
              isBuyButtonDisabled={false}
            />
          </StyledHeader>
          <Stack direction="row" gap="15px">
            <StyledBox data-testid="left-box">{leftContent}</StyledBox>
            <StyledInnerBox data-testid="right-box">
              {rightContent}
            </StyledInnerBox>
          </Stack>
        </BodyLayout>
      </Box>
      <StyledFooter data-testid="footer">
        <Footer />
      </StyledFooter>
    </Stack>
  );
};

export default DashboardTemplate;
