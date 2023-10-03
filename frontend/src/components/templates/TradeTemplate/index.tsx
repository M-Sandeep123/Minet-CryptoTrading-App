import styled from "@emotion/styled";
import { NavBar } from "../../organisms/NavBar";
import { Box } from "@mui/material";
import Header, { HeaderProps } from "../../organisms/Header";
import Footer from "../../molecules/Footer";
import theme from "../../../theme";

interface TradeTemplateProps extends HeaderProps {
  content: React.ReactElement;
}

const TradeTemplate: React.FC<TradeTemplateProps> = ({ content, ...props }) => {
  return (
    <>
      <StyleTemplateBox>
        <StyleMainBox>
          <StyleNavBar />
          <StyleOuterBox>
            <Header
              title={props.title}
              onClickAvatarIcon={props.onClickAvatarIcon}
              onClickBuyButton={props.onClickBuyButton}
              onClickSellButton={props.onClickSellButton}
              isButtonRequired={props.isButtonRequired}
              isSellButtonDisabled={props.isSellButtonDisabled}
              isBuyButtonDisabled={props.isBuyButtonDisabled}
            ></Header>
            <StyleContentBox>{content}</StyleContentBox>
          </StyleOuterBox>
        </StyleMainBox>
        <StyleFooter>
          <Footer />
        </StyleFooter>
      </StyleTemplateBox>
    </>
  );
};

const StyleNavBar = styled(NavBar)({
  width: "80px",
  height: "728px",
  padding: "24px",
  gap: "72px",
});
const StyleMainBox = styled(Box)({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "flex-start",
  backgroundColor: theme.palette.primary[100],
});

const StyleOuterBox = styled(Box)({
  display: "inline-flex",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "94vw",
  overflow: "hidden",
});

const StyleContentBox = styled(Box)({
  border: "1px solid #E8E8F7",
  padding: "20px 20px",
  height: "81vh",
  background: theme.palette.primary[100],
  overflowY: "auto",
  overflowX: "hidden",
});

const StyleFooter = styled(Box)({
  paddingTop: "18px",
  alignItems: "flex-end",
  paddingLeft: "80px",
  width: "94.5%",
});

const StyleTemplateBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  overflow: "hidden",
});

export default TradeTemplate;
