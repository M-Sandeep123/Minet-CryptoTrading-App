import { useNavigate } from "react-router-dom";
import { TradeTable } from "../../components/organisms/TradeTable";
import TradeTemplate from "../../components/templates/TradeTemplate";
import { useAuth0 } from "@auth0/auth0-react";

const TradePage = () => {
  const navigate = useNavigate();
   const { logout } = useAuth0();
  const handleOnClickAvatar = ()=> {
    sessionStorage.setItem("email", "");
    logout();
  }

  return (
    <TradeTemplate
      content={<TradeTable></TradeTable>}
      title={"Trade"}
      onClickAvatarIcon={handleOnClickAvatar}
      isButtonRequired={true}
      isSellButtonDisabled={true}
      isBuyButtonDisabled={true}
      onClickBuyButton={() => {
        console.log("Buy Clicked");
      }}
      onClickSellButton={() => {
        console.log("Sell Clicked");
      }}
    />
  );
};

export default TradePage;
