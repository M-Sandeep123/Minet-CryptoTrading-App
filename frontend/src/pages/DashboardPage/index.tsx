import { Box, Divider, Stack, styled } from "@mui/material";
import PaymentTemplate from "../../components/templates/PaymentTemplate";
import Watchlist from "../../components/organisms/Watchlist";
import {
  COLORS,
  GRAPH_REPORT,
  USER_INVEST,
  graphValueDown,
  graphValueUp,
} from "../../constants";
import PortfolioStats from "../../components/organisms/PortfolioValueCard";
import { MyPortfolio } from "../../components/organisms/MyPortfolio";
import MyWallet, {
  TransactionDataType,
} from "../../components/organisms/MyWallet";
import { useContext, useEffect, useState } from "react";
import {
  getAllUsers,
  getAllportfolioData,
  getCryptoCurrencyAPIData,
  getUserDetails,
  getWalletDetails,
  getWatchlistData,
  signup,
} from "../../../utils/services";
import arrowUpIcon from "../../../public/assets/icons/arrowUpRight.svg";
import arrowDownIcon from "../../../public/assets/icons/arrowDownRight.svg";
import { UserContext, UserType, useUser } from "../../store/user";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { getImage } from "../../components/organisms/MyPortfolio";

const BodyMainLayout = styled(Box)({
  display: "flex",
  padding: "24px 0px 0px 24px",
  gap: "24px",
  height: "89vh",
});

const BodyContentLayout = styled(Stack)({
  width: "100%",
  height: "318.01px",
  gap: "12px",
});

const CustomDivider = styled(Divider)({
  height: "100vh",
});

const StyledPortfolioBox = styled(Box)({
  height: "100%",
});

const DashboardPageBody = (props: any) => {
  const navigate = useNavigate();
  const handleOnClickDiscovery = () => {
    navigate("/asset", {
      state: {
        value: "all",
      },
    });
  };
  const handleOnClickWatchList = () => {
    navigate("/asset", {
      state: {
        value: "watchlist",
      },
    });
  };
  return (
    <BodyMainLayout>
      <BodyContentLayout>
        <Box>
          <Watchlist
            onClickDiscovery={handleOnClickDiscovery}
            onClickWatchList={handleOnClickWatchList}
            watchlistData={props.watchlistItemsData}
          />
        </Box>
        <StyledPortfolioBox>
          <PortfolioStats
            graphData={props.imageRender ? GRAPH_REPORT : null}
            flagPointer={true}
            totalInvestLabel={USER_INVEST.totalLabel}
            totalInvestChange={USER_INVEST.totalInvestChange}
            totalInvestAmount={USER_INVEST.totalInvestment}
            cryptoLabel={USER_INVEST.cryptoName}
            cryptoChange={USER_INVEST.cryptoChange}
            cryptoAmount={USER_INVEST.cryptoPrice}
          />
        </StyledPortfolioBox>
      </BodyContentLayout>
      <Box display={"flex"}>
        <CustomDivider orientation="vertical" />
        <Box>
          <MyPortfolio
            portfolioData={props.portfolioData}
            totalbalance={props.totalBalance}
          />
          <MyWallet
            image={props.imageRender}
            usdCurrenyValue={
              props.imageRender
                ? USER_INVEST.userWalletAmount
                : USER_INVEST.userInitialData
            }
            transactiondata={props.recentTransaction}
          />
        </Box>
      </Box>
    </BodyMainLayout>
  );
};

const DashboardPage = () => {
  const navigate = useNavigate();
  const [cryptoData, setCryptoData] = useState([]);
  const { updateUser } = useContext(UserContext);
  const { isAuthenticated, user, logout } = useAuth0();
  const { userInfo } = useUser();
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [walletData, setWalletData] = useState([]);
  const [renderImage, setRenderImage] = useState<boolean>();
  const [filterData, setFilterData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState<UserType[]>([
    userInfo,
  ]);
  const [totalBalance, setTotalBalance] = useState<number>(0.0);
  const fetchUserInfo = async () => {
    if (isAuthenticated && user) {
      sessionStorage.setItem("email", user.email ?? "default@gmail.com");
      const email = sessionStorage.getItem("email");
      console.log(email);
      console.log(user.email)
      try {
        const data = {
          fullName: user.name ?? "google",
          email: user.email ?? "default@gmail.com",
          password: "default@1234",
          balance: 50000,
        };
        const response = await signup(data);  
    if (email) {
      getUserDetails(email)
        .then((res) => {
          updateUser({
            id: res.data.id,
            fullName: res.data.fullName,
            email: res.data.email,
            password: res.data.password,
            balance: res.data.balance,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("Email not found in sessionStorage");
    }
        navigate("/dashboard");
      } catch (error) {
        console.error("error");
      }
    }
  };
  console.log(userInfo);
  const getCryptoData = async () => {
    const apiPortfolioData = await getAllportfolioData();
    const apiWalletData = await getWalletDetails();

    setPortfolioData(apiPortfolioData?.data);
    setWalletData(apiWalletData?.data);
  };

  const getWatchListData = async () => {
    const apiCryptoData = await getWatchlistData(userInfo.id);
    setCryptoData(apiCryptoData?.data);
  };

  const getUserDetailsInfo = () => {
    const email = sessionStorage.getItem("email");
    if (email) {
      getUserDetails(email)
        .then((res) => {
          updateUser({
            id: res.data.id,
            fullName: res.data.fullName,
            email: res.data.email,
            password: res.data.password,
            balance: res.data.balance,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.error("Email not found in sessionStorage");
    }
  };
  useEffect(() => {
    fetchUserInfo();
    getCryptoData();
    getUserDetailsInfo();
    
  }, [isAuthenticated,user]);

  useEffect(() => {
    
    getWatchListData();
    recentWalletDetails();
    recentPortfolioValues();
  }, [walletData]);

  const recentWalletDetails = () => {
    const userIdToFilter = userInfo?.id;
    const filteredData = walletData.filter(
      (item: TransactionDataType) => userIdToFilter === item.userId
    );
    const lastOneOrTwoItems = filteredData.slice(-2);
    setRenderImage(filteredData.length !== 0);
    setFilterData(lastOneOrTwoItems);
  };

  const portfolioFilteredData: any[] = [];

  const recentPortfolioValues = () => {
    const userIdToFilter = userInfo?.id;
    const filteredData = walletData.filter(
      (item: TransactionDataType) => userIdToFilter === item.userId
    );
    if (filteredData.length === 0) {
      portfolioData.map((item: any) => {
        const obj = {
          coinName: item.coinName,
          coinSrc: item.coinSrc,
          coinCaption: item.coinCaption,
          coinPrice: 0.0,
          coinChange: "+0.00%",
          coinMarketCap: "$ 0.00",
          coinisWatchListed: item.coinisWatchlisted,
        };
        portfolioFilteredData.push(obj);
      });
      setPortfolioData(portfolioFilteredData);
    } else {
      setPortfolioData(portfolioData);
      setTotalBalance(14027.2);
    }
  };

  const graphData: any[] = [];
  cryptoData.map((crypto: any) => {
    const obj = {
      variant: "body1",
      label: `$${crypto.cryptoPrice}`,
      color: COLORS.BETA_TEXT_HIGH_EMPHASIS,
      graphLabel: crypto.cryptoChange,
      graphVariant: "overline",
      graphColor: COLORS.GAMMA_SUCCESS_500,
      iconSrc: arrowUpIcon,
      src: crypto.cryptoSrc,
      width: "42px",
      height: "42px",
      variant1: "body1",
      label1: crypto.cryptoName,
      graphData: [
        {
          id: `${crypto.id} ${crypto.symbol}`,
          color: COLORS.GAMMA_SUCCESS_500,
          data: graphValueUp,
        },
      ],
    };
    if (obj.graphLabel.includes("-")) {
      obj.iconSrc = arrowDownIcon;
      (obj.graphColor = COLORS.GAMMA_ERROR_500),
        (obj.graphData = [
          {
            id: `${crypto.id} ${crypto.symbol}`,
            color: COLORS.GAMMA_ERROR_500,
            data: graphValueDown,
          },
        ]);
    }
    graphData.push(obj);
  });
  const handleOnClickAvatar = () => {
    sessionStorage.setItem("email", "");
    logout();
  };
  return (
    <Box overflow={"hidden"}>
      <PaymentTemplate
        content={
          <DashboardPageBody
            imageRender={renderImage}
            recentTransaction={filterData}
            portfolioData={portfolioData}
            watchlistItemsData={graphData}
            totalBalance={totalBalance}
          />
        }
        onClickAvatar={handleOnClickAvatar}
      />
    </Box>
  );
};

export default DashboardPage;
