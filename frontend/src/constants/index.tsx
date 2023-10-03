import "../index.css";
import blackBitcoin from "../../public/assets/images/blackBitcoin.svg";
import etherium from "../../public/assets/images/ethereum.png";
import tether from "../../public/assets/images/tether.svg";
import xrp from "../../public/assets/images/xrp.svg";
import ethereum2 from "../../public/assets/images/ethereum2.png";
import bitcoinCoin from "../../public/assets/images/bitcoinCoin.png";
import cardano from "../../public/assets/images/cardano.png";
import dodge from "../../public/assets/images/DodgeCoin.png";
import usd from "../../public/assets/images/usdCoin.svg";
import bitcoin from "../../public/assets/images/bitCoin.png";
import Tick from "../../public/assets/images/transactionState.svg";
import polkaDot from "../../public/assets/images/polkaDot.svg";
import arrowUpRight from "../../public/assets/icons/arrowUpRight.svg";
import arrowDownRight from "../../public/assets/icons/arrowDownRight.svg";
import ethereum2Black from "../../public/assets/images/ethereum2Black.svg";
import ethereumBlack from "../../public/assets/images/ethereumBlack.svg";
import dashboard from "../../public/assets/icons/dashboard.svg";
import portfolio from "../../public/assets/icons/portfolio.svg";
import trade from "../../public/assets/icons/trade.svg";
import notification from "../../public/assets/icons/notification.svg";
import logOut from "../../public/assets/icons/logout.svg";
import dashboardactive from "../../public/assets/icons/dashboardactive.svg";
import Logo from "/public/assets/icons/logo.png";
import { TransactionDataType } from "../components/organisms/MyWallet";

export const COLORS = {
  ALPHA_PRIMARY_100: "#FAFCFF",
  ALPHA_PRIMARY_300: "#CCE3FF",
  ALPHA_PRIMARY_500: "#0052FF",
  ALPHA_PRIMARY_700: "#002EB7",
  ALPHA_PRIMARY_900: "#00177A",

  BETA_TEXT_LIGHT_EMPHASIS: "#B2B2B9",
  BETA_TEXT_MEDIUM_EMPHASIS: "#7D7D89",
  BETA_TEXT_HIGH_EMPHASIS: "#343446",

  GAMMA_SUCCESS_100: "#E9F7EC",
  GAMMA_SUCCESS_500: "#20B03F",

  GAMMA_WARNING_100: "#FFF6ED",
  GAMMA_WARNING_300: "#FFA74F",

  GAMMA_ERROR_100: "#F3E6EB",
  GAMMA_ERROR_500: "#B71A33",

  GAMMA_GREY_50: "#F2F2F7",
  GAMMA_GREY_100: "#E8E8F7",
  GAMMA_GREY_300: "#B4B4CF",
  GAMMA_GREY_500: "#4B4B60",
  GAMMA_GREY_700: "#252545",
  GAMMA_GREY_900: "#0E0E2E",
  GAMMA_GREY_WHITE: "#FFF",
};

export const h4 = {
  fontFamily: "GraphikSemiBold",
  fontSize: "40px",
  lineHeight: "54px",
  fontWeight: 500,
  letterSpacing: "-0.01em",
};

export const h6 = {
  fontFamily: "GraphikRegular",
  fontSize: "24px",
  lineHeight: "34px",
  fontWeight: 400,
  letterSpacing: "0em",
};

export const subtitle1 = {
  fontFamily: "GraphikSemiBold",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "28px",
  letterSpacing: "0.1px",
};

export const subtitle2 = {
  fontFamily: "GraphikRegular",
  fontSize: "20px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "28px",
  letterSpacing: "0.1px",
};

export const body1 = {
  fontFamily: "GraphikSemiBold",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "22px",
  letterSpacing: "0.16px",
};

export const body2 = {
  fontFamily: "GraphikRegular",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "22px",
  letterSpacing: "0.16px",
};

export const button = {
  fontFamily: "GraphikMedium",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "42px",
};

export const caption1 = {
  fontFamily: "GraphikMedium",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "16px",
};

export const caption2 = {
  fontFamily: "GraphikRegular",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.01em",
};

export const overline = {
  fontFamily: "GraphikRegular",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "14px",
  letterSpacing: "0.06px",
};
export const LOGIN_CARD = {
  googleLabel: "Google",
  googleAlt: "login-with-google",
  facebookLabel: "Facebook",
  facebookAlt: "login-with-facebook",
  microsoftLabel: "Microsoft",
  microsoftAlt: "login-with-microsoft",
};

export const priceCorrelations = [
  {
    cardSrc: blackBitcoin,
    cardLabel: "Bitcoin",
    cardContent: "Moves tightly together",
    cardPrize: "$3,285,553.73",
    cardPercentage: "100%",
  },
  {
    cardSrc: etherium,
    cardLabel: "Ethereum",
    cardContent: "Moves tightly together",
    cardPrize: "$230,966.85",
    cardPercentage: "86%",
  },
  {
    cardSrc: xrp,
    cardLabel: "XRP",
    cardContent: "Moves tightly together",
    cardPrize: "$60.20",
    cardPercentage: "10%",
  },
  {
    cardSrc: tether,
    cardLabel: "Tether",
    cardContent: "Moves tightly together",
    cardPrize: "$74.28",
    cardPercentage: "2%",
  },
  {
    cardSrc: etherium,
    cardLabel: "Ethereum 2",
    cardContent: "Moves tightly together",
    cardPrize: "$60.20",
    cardPercentage: "10%",
  },
  {
    cardSrc: blackBitcoin,
    cardLabel: "Dodge Coin",
    cardContent: "Moves tightly together",
    cardPrize: "$74.28",
    cardPercentage: "2%",
  },
];

export const TRADE_TABLE_DATA = [
  {
    coinName: "BitCoin",
    coinSrc: bitcoin,
    coinCaption: "BTC",
    coinPrice: 328553.73,
    coinChange: "+1.06%",
    coinMarketCap: "$60.1T",
    coinisWatchListed: true,
  },
  {
    coinName: "Ethereum",
    coinSrc: etherium,
    coinCaption: "ETH",
    coinPrice: 216678.1,
    coinChange: "-5.49%",
    coinMarketCap: "$25.4T",
    coinisWatchListed: false,
  },
  {
    coinName: "Ethereum 2",
    coinSrc: ethereum2,
    coinCaption: "ETH2",
    coinPrice: 74.3,
    coinChange: "-5.49%",
    coinMarketCap: "$4.6T",
    coinisWatchListed: true,
  },
  {
    coinName: "Tether",
    coinSrc: tether,
    coinCaption: "USDT",
    coinPrice: 74.31,
    coinChange: "+0.11%",
    coinMarketCap: "$4.6T",
    coinisWatchListed: true,
  },
  {
    coinName: "Bitcoin Coin",
    coinSrc: bitcoinCoin,
    coinCaption: "BNB",
    coinPrice: 24942.54,
    coinChange: "-3.69%",
    coinMarketCap: "$4.2T",
    coinisWatchListed: true,
  },
  {
    coinName: "Cardano",
    coinSrc: cardano,
    coinCaption: "ADA",
    coinPrice: 104.52,
    coinChange: "-1.82%",
    coinMarketCap: "$3.4T",
    coinisWatchListed: false,
  },
  {
    coinName: "XRP",
    coinSrc: xrp,
    coinCaption: "XRP",
    coinPrice: 57.21,
    coinChange: "+1.11%",
    coinMarketCap: "$2.7T",
    coinisWatchListed: false,
  },
  {
    coinName: "Dodge Coin",
    coinSrc: dodge,
    coinCaption: "XRP",
    coinPrice: 17.64,
    coinChange: "-6.96%",
    coinMarketCap: "$2.3T",
    coinisWatchListed: false,
  },
  {
    coinName: "USD Coin",
    coinSrc: usd,
    coinCaption: "XRP",
    coinPrice: 74.26,
    coinChange: "+1.01%",
    coinMarketCap: "$2.1T",
    coinisWatchListed: false,
  },
];
export const DUMMY_TRADE_TABLE_DATA = [
  { coinName: "Bitcoin", coinSrc: "bitCoin.png", coinChange: "+1.06%" },
  {
    coinName: "Ethereum",
    coinSrc: "ethereum.png",
    coinChange: "-1.06%",
  },
  {
    coinName: "Ethereum 2",
    coinSrc: "ethereum2.png",
    coinChange: "+1.06%",
  },
  { coinName: "Tether", coinSrc: "tether.svg", coinChange: "+1.06%" },
  {
    coinName: "Bitcoin Coin",
    coinSrc: "bitcoinCoin.png",
    coinChange: "+1.06%",
  },
  {
    coinName: "Cardano",
    coinSrc: "cardano.png",
    coinChange: "+1.06%",
  },
  { coinName: "Cardano", coinSrc: "bitCoin.png", coinChange: "+1.06%" },
  { coinName: "XRP", coinSrc: "xrp.svg", coinChange: "+1.06%" },
  {
    coinName: "Dodge Coin",
    coinSrc: "DodgeCoin.png",
    coinChange: "+1.06%",
  },
  { coinName: "USD Coin", coinSrc: "usd.png", coinChange: "+1.06%" },
];
export const usdCard = {
  cardSrc: usd,
  cardWidth: "56px",
  cardHeigth: "56px",
  cardLabel: "USD Coin",
  cardVariant: "h6",
};
export const timeLineData = [
  {
    timelineLabel: "1H",
  },
  {
    timelineLabel: "24H",
  },
  {
    timelineLabel: "1W",
  },
  {
    timelineLabel: "1M",
  },
  {
    timelineLabel: "1Y",
  },
  {
    timelineLabel: "ALL",
  },
];

export const speedDeliveryData = [
  {
    value: "2",
    name: "Instant :",
    time: "2-5 minutes",
    fees: "Delivery fees : 0.001 BTC",
  },
  {
    value: "4",
    name: "Faster :",
    time: "4 hours",
    fees: "Delivery fees : 0.0001 BTC",
  },
  {
    value: "120",
    name: "Fast :",
    time: "120 hours",
    fees: "Delivery fees : 0.00001 BTC",
  },
  {
    value: "0",
    name: "None",
    time: "",
    fees: "",
  },
];

export const chipData = [
  {
    label: "Bitcoin",
    bgColor: "#F7931A",
    isSelected: true,
  },
  {
    label: "XRP",
    bgColor: "#222222",
    isSelected: false,
  },
  {
    label: "Polkadot",
    bgColor: "#E6007A",
    isSelected: false,
  },
  {
    label: "Ethereum",
    bgColor: "#627EEA",
    isSelected: false,
  },
  {
    label: "Tether",
    bgColor: "#26A17B",
    isSelected: false,
  },
  {
    label: "Ethereum 2",
    bgColor: "#191971",
    isSelected: false,
  },
  {
    label: "Dodge Coin",
    bgColor: "#DBC984",
    isSelected: false,
  },
  {
    label: "USD Coin",
    bgColor: "#627EEA",
    isSelected: false,
  },
  {
    label: "Cardano",
    bgColor: "#E6007A",
    isSelected: false,
  },
  {
    label: "BitCoin Coin",
    bgColor: "#F7931A",
    isSelected: false,
  },
];
export const LABEL = "Dashboard";
export const CAREER = "Careers";
export const PRIVACY = "Legals & Privacy";
export const COPYRIGHT = "© 2021 Minet";
export const LANGUAGE = "English";
export const HELP = "NEED HELP";

export const DropDownTimeData = [{ value: "24h", name: "24h" }];
export const assetsData = [{ value: "All assets", name: "All assets" }];
export const tradeTableColumnheaders = [
  {
    name: "Name",
  },
  {
    price: "Price",
  },
  {
    change: "Change",
  },
  {
    marketCap: "MarketCap",
  },
  {
    watch: "Watch",
  },
];
export const tradetablemessages = {
  ALL_ASSETS: "All Assets",
  WATCH_LIST: "Watchlist",
  TRADE_PLACEHOLDER_TEXT: "Search all Assets",
  DROP_DOWN_TIMELINE_INITIAL_VALUE: "24h",
  DROP_DOWN_ALL_ASSETS_INITIAL_VALUE: "All assets",
};

export const cryptoCardData = {
  cryptoSrc: bitcoin,
  cryptoLabel: "Bitcoin",
  cryptoDescription: "$3,406,069.54",
  cryptoTick: Tick,
};

export const ForgotPasswordConstants = {
  FORGOT_PASSWORD: "Forgot Password",
  EMAIL: "Email",
  EMAIL_ID: "you@company.com",
  EMAIL_LABEL: "EmailAddress",
  SEND_LINK: "Send reset link",
  BACK_TO: "Back to ",
  LOG_IN: "Login",
  RESETCODE: "Reset Code",
  PLACEHOLDER_VALUE: "8 digits code",
  RESET_PASSWORD: "Reset Password",
  ERROR_MESSAGE: "Invalid Mail",
};

export const TRANSACTION_TABLE_ROW = {
  iconAlt: "transaction-success-icon",
};

export const myPortfoliomessages = {
  MY_PORTFOLIO: "My portfolio",
  TOTAL_BALANCE: "Total Balance",
};
export const ChooseCryptoCardConstants = {
  COINNAME: "Bitcoin",
  COINLABEL: "BTC",
  COINVALUE: "+8.2%",
  MARKET: "Market cap",
  MARKETAMOUNT: "$64.2T",
  HOURS: "Vol. 24H",
  HOURSAMOUNT: "$2.9T",
  SUPPLY: "Circulating Supply",
  SUPPLYAMOUNT: "18.8M BTC",
  WISHLIST: "Added to Watchlist",
};

export const GRAPH_LABEL = "24 h";

export const GRAPH_COLOR = "accent";

export const PASSWORD_CHARACTER_REGEX = /[!"`'#%&,:;<>=@{}~$()*+/\\?[\]^|]+/;

export const ResetPasswordConstants = {
  RESET_PASSWORD: "Reset Password",
  PASSWORD_HEADING: "Enter Password",
  PASSWORD_PLACEHOLDER: "Enter Password",
  PASSWORD_LABEL: "Password",
  RE_ENTER_PASSWORD: "Re-Enter Password",
  RE_ENTER_PASSWORD_PLACEHOLDER: "Re-Enter Password",
  RE_ENTER_PASSWORD_LABEL: "ReEnterPassword",
  HELPER_TEXT:
    "A min of 8 charaters with atleast 1 special character and number included",
  SEND_LINK: "Reset Password",
  LOG_IN: "Login",
  ERROR_LENGTH: "Password must be at least 8 characters long",
  ERROR_DIGIT: "Password must contain at least 1 digit",
  ERROR_CHARACTER: "Password must contain at least 1 special character",
  ERROR_MISMATCH: "Passwords do not match",
};
export const CHOOSE_CRYPTO = "Choose Crypto";
export const cryptoData = [
  {
    id: 1,
    cryptoSrc: bitcoin,
    cryptoLabel: "Bitcoin",
    cryptoDescription: "$3,406,069.54",
  },
  {
    id: 2,
    cryptoSrc: etherium,
    cryptoLabel: "Ethereum",
    cryptoDescription: "$1,297.93",
  },
  {
    id: 3,
    cryptoSrc: bitcoinCoin,
    cryptoLabel: "Binance",
    cryptoDescription: "$30,054.88",
  },
  {
    id: 4,
    cryptoSrc: tether,
    cryptoLabel: "Tether",
    cryptoDescription: "$74.21",
  },
  {
    id: 5,
    cryptoSrc: bitcoin,
    cryptoLabel: "Cardano",
    cryptoDescription: "$138.22",
  },
  {
    id: 6,
    cryptoSrc: cardano,
    cryptoLabel: "XRP",
    cryptoDescription: "$76.73",
  },
  {
    id: 7,
    cryptoSrc: dodge,
    cryptoLabel: "Dogecoin",
    cryptoDescription: "$21.37",
  },
  {
    id: 8,
    cryptoSrc: polkaDot,
    cryptoLabel: "PolkaDot",
    cryptoDescription: "$1,642.39",
  },
  {
    id: 9,
    cryptoSrc: tether,
    cryptoLabel: "Tether2",
    cryptoDescription: "$74.21",
  },
];

export const graphValueUp = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 10,
    y: 25,
  },
  {
    x: 17.5,
    y: 10,
  },
  {
    x: 22.5,
    y: 20,
  },
  {
    x: 30,
    y: 18,
  },
  {
    x: 45,
    y: 40,
  },
  {
    x: 75,
    y: 5,
  },
  {
    x: 100,
    y: 40,
  },
];
export const graphValueDown = [
  {
    x: 0,
    y: 5,
  },
  {
    x: 15,
    y: 30,
  },
  {
    x: 25,
    y: 25,
  },
  {
    x: 29,
    y: 28,
  },
  {
    x: 40,
    y: 20,
  },
  {
    x: 43,
    y: 20,
  },
  {
    x: 55,
    y: 35,
  },
  {
    x: 75,
    y: 10,
  },
  {
    x: 90,
    y: 20,
  },
  {
    x: 100,
    y: 13,
  },
];

export const graphData = [
  {
    id: 1,
    variant: "body1",
    label: "$3,00,439.93",
    color: COLORS.BETA_TEXT_HIGH_EMPHASIS,
    graphLabel: "+1.2%",
    graphVariant: "overline",
    graphColor: COLORS.GAMMA_SUCCESS_500,
    iconSrc: arrowUpRight,
    src: bitcoin,
    width: "42px",
    height: "42px",
    variant1: "body1",
    label1: "Bitcoin",
    graphData: [
      {
        id: "bitcoin",
        color: COLORS.GAMMA_SUCCESS_500,
        data: graphValueUp,
      },
    ],
  },
  {
    id: 2,
    variant: "body1",
    label: "$1,297.24",
    color: COLORS.BETA_TEXT_HIGH_EMPHASIS,
    graphLabel: "-1.3%",
    graphVariant: "overline",
    graphColor: COLORS.GAMMA_ERROR_500,
    iconSrc: arrowDownRight,
    src: ethereumBlack,
    width: "42px",
    height: "42px",
    variant1: "body1",
    label1: "Ethereum",
    graphData: [
      {
        id: "ethererum",
        color: COLORS.GAMMA_ERROR_500,
        data: graphValueDown,
      },
    ],
  },
  {
    id: 3,
    variant: "body1",
    label: "$26,128.24",
    color: COLORS.BETA_TEXT_HIGH_EMPHASIS,
    graphLabel: "-1.5%",
    graphVariant: "overline",
    graphColor: COLORS.GAMMA_ERROR_500,
    iconSrc: arrowDownRight,
    src: ethereum2Black,
    width: "42px",
    height: "42px",
    variant1: "body1",
    label1: "Ethereum 2",
    graphData: [
      {
        id: "ethererum2",
        color: COLORS.GAMMA_ERROR_500,
        data: graphValueDown,
      },
    ],
  },
  {
    id: 4,
    variant: "body1",
    label: "$74.14",
    color: COLORS.BETA_TEXT_HIGH_EMPHASIS,
    graphLabel: "+2.2%",
    graphVariant: "overline",
    graphColor: COLORS.GAMMA_SUCCESS_500,
    iconSrc: arrowUpRight,
    src: tether,
    width: "42px",
    height: "42px",
    variant1: "body1",
    label1: "Tether",
    graphData: [
      {
        id: "tether",
        color: COLORS.GAMMA_SUCCESS_500,
        data: graphValueUp,
      },
    ],
  },
];
export const NavList = [
  {
    icon: Logo,
    altIcon: Logo,
    active: true,
  },
  {
    icon: dashboard,
    altIcon: dashboardactive,
    active: true,
  },
  {
    icon: portfolio,
    altIcon: portfolio,
    active: true,
  },
  {
    icon: trade,
    altIcon: trade,
    active: true,
  },
  {
    icon: notification,
    altIcon: notification,
    active: true,
  },
  {
    icon: logOut,
    altIcon: logOut,
    active: true,
  },
];

export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const RESET_CODE = /^\d+$/;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
export const SIGNUP_ORG = {
  header: "Signup with Minet",
  emailLabel: "Email",
  fullNameLable: "Full Name",
  passwordLabel: "Password",
  butLabel: "Sign up",
  passwordDiscription:
    "A min of 8 charaters with atleast 1 special character and number included",
  footerContent: "Already have an account?",
  loginLink: "Login",
  emailAlertMsg: "Enter a valid email",
  passwordAlertMsg: "Choose strong password",
  fullNamePlaceholder: "Eg: John Doe",
  emailPlaceholder: "you@gmail.com",
  passwordPlaceholder: "Create Password",
  accountExists: "Already Account Exists",
};

export const LOG_IN = {
  header: "Login to Minet",
  emailLabel: "Email",
  emailPlaceholder: "you@company.com",
  passwordLabel: "Password",
  passwordPlaceholder: "Enter Password",
  forgotPassword: "Forgot Password",
  buttonLabel: "Sign In",
  footerContent: "Don't have an account?",
  signLink: "Signup",
  emailAlertMsg: "Enter a valid email",
  invalidDetails: "Invalid Credentials",
  samePassword: "Invalid Password",
};

export const TransactionData: TransactionDataType[] = [
  {
    id: 1,
    date: new Date("2023-7-23"),
    transactionCryptoName: "Bitcoin BTC",
    quantity: "-0.0234510 BTC",
    availableBalance: "+$34,000.00",
    transactionType: "Sold",
    userId: 1,
    otherUser: "userName",
  },
  {
    id: 2,
    date: new Date("2023-7-23"),
    transactionCryptoName: "Bitcoin BTC",
    quantity: "-0.0234510 BTC",
    availableBalance: "+$34,000.00",
    transactionType: "Sold",
    userId: 1,
    otherUser: "userName",
  },
];

export const MyWalletOrg = {
  walletLabel: "My Wallets",
  USDLabel: "USD Coin",
  USDollar: "US Dollar",
  walletTransaction: "Recent Transactions",
  walletViewAll: "View All",
  defaultValue:
    "You don’t own any crypto. Send yourself some crypto to get started.",
};
export const GRAPH_REPORT = [
  {
    id: "Total Investment",
    color: "hsl(283, 70%, 50%)",
    data: [
      {
        x: "SEPT 8",
        y: 88,
      },
      {
        x: "SEPT 10",
        y: 63,
      },
      {
        x: "SEPT 15",
        y: 221,
      },
      {
        x: "SEPT 17",
        y: 17,
      },
      {
        x: "SEPT 20",
        y: 167,
      },
      {
        x: "SEPT 22",
        y: 121,
      },
      {
        x: "SEPT 26",
        y: 128,
      },
      {
        x: "SEPT 30",
        y: 260,
      },
    ],
  },
  {
    id: "Bitcoin",
    color: "hsl(71, 70%, 50%)",
    data: [
      {
        x: "SEPT 8",
        y: 282,
      },
      {
        x: "SEPT 10",
        y: 259,
      },
      {
        x: "SEPT 15",
        y: 49,
      },
      {
        x: "SEPT 17",
        y: 55,
      },
      {
        x: "SEPT 20",
        y: 294,
      },
      {
        x: "SEPT 22",
        y: 241,
      },
      {
        x: "SEPT 26",
        y: 22,
      },
      {
        x: "SEPT 30",
        y: 177,
      },
    ],
  },
];
export const PORTFOLIO_CONTENT = {
  label: "My portfolio value",
  activeCoins: "10 coins (3 active)",
  activeCoinsCaption: "Click on currency name below to display it on the graph",
  infoIconAltText: "info-icon",
  noReportMainLabel: "Total Investment",
  stockIconArrow: "zero-stock",
  noReportChangePercentage: "+0,0%",
  noReportZeroBalance: "$ 0.00",
  noReportBlueDotIconAlt: "blue-dot-icon",
  noReportDataImageAlt: "no-report-image",
};

export const AMOUNT_DETAILS = {
  headerLabel: "Amount details",
  butttonLabel: "Buy max",
};

export const SUCCESS_TRANSACTION = {
  buyButtonLabel: "BUY CRYPTO",
  sellButtonLabel: "SELL CRYPTO",
  UsdButtonLabel: "GO TO USD COIN",
  buyDescription:
    "Purchase is completed, please check your balance in your crypto wallet",
  sellDescription:
    "Sell is completed, please check your balance in your Rupee coin",
};

export const BUY_NOW_CARD = {
  headingBuyLabel: "You are buying",
  headingSellLabel: "You are selling",
  paymentBuyLabel: "Payment method",
  paymentSellLabel: "Paying through",
  deliveryLabel: "Delivery fees",
  despositLabel: "Deposit to",
  transactionFeeLabel: "Transaction fee",
  totalLabel: "Total",
};

export const PAGE_LABELS = {
  BUY_CRYPTO: "Buy Crypto",
  SELL_CRYPTO: "Sell Crypto",
  PAYMENT_METHOD: "Payment method",
  TOTAL_BALANCES: "Total Balance",
  DEFAULT: "Default",
  USD_COIN: "USD Coin (Cash)",
  BITCOIN: "Bitcoin",
  ETHEREUM: "Ethereum",
  TOTAL_BALANCE: "Total Balance -",
  SELECT_SPEED_DELIVERY: "Select speed delivery",
  VISA_CREDIT: "Visa credit ...8845",
  WALLET_CARD: "Bitcoin wallet",
  BUTTON_LABEL: "Buy Now",
  SELL_BUTTON_LABEL: "Sell Now",
  ETH_TRANSACTION_FEES: 30.0,
  BTC_TRANSACTION_FEES: 1000.0,
  DELIVERY_FEE_ETH: 0.005,
  DELIVERY_FEE_BTC: 0.001,
  DEPOSIT_TO: "Rupee Coin",
  OPTION_VALUES: ["0.001", "0.0001", "0.00001"],
  OPTION_NAMES: ["Instant :", "Faster :", "Fast :"],
  OPTION_TIME: ["2-5 minutes", "4 hours", "120 hours"],
  OPTION_FEES: [
    "Delivery fees : 0.001",
    "Delivery fees : 0.0001",
    "Delivery fees : 0.00001",
  ],
};
export const CRYPTO_ASSETS_PAGE = {
  label: "About Bitcoin",
  description:
    "The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoins are divisible into smaller units known as satoshis each satoshi is worth 0.00000001 bitcoin.",
  resources: "Resources",
  linkOne: "Official Website",
  linkTwo: "White Paper",
  balance: "Total balance",
  crypto: "0.0234510 BTC ($85,553.73) ",
  placeholder: "Search All Assets",
  initalValue: "1M",
};

export const TRADE_WALLET_DATA = [
  {
    date: new Date("2023-2-28"),
    transactionCryptoName: "Bitcoin",
    otherUser: "From Badgley",
    quantity: "+0.0010 BTC",
    transactionType: "Purchased",
    availableBalance: "+$900",
  },
  {
    date: new Date("2023-2-25"),
    transactionCryptoName: "Bitcoin",
    otherUser: "From Jane Cooper",
    quantity: "+0.0230 BTC",
    transactionType: "Purchased",
    availableBalance: "+$1,800",
  },
  {
    date: new Date("2023-2-20"),
    transactionCryptoName: "Bitcoin",
    otherUser: "From Leslie Alexander",
    quantity: "+0.0030 BTC",
    transactionType: "Purchased",
    availableBalance: "+$1,200",
  },
  {
    date: new Date("2023-2-18"),
    transactionCryptoName: "Bitcoin",
    otherUser: "From Guy Hawkinsy",
    quantity: "+0.0150 BTC",
    transactionType: "Purchased",
    availableBalance: "+$1,000",
  },
  {
    date: new Date("2023-2-15"),
    transactionCryptoName: "Bitcoin",
    otherUser: "From Jacob Jones",
    quantity: "+0.0650 BTC",
    transactionType: "Purchased",
    availableBalance: "+$3,200",
  },
  {
    date: new Date("2023-2-13"),
    transactionCryptoName: "Bitcoin",
    otherUser: "From Theresa Webb",
    quantity: "+0.0900 BTC",
    transactionType: "Purchased",
    availableBalance: "+$9,000",
  },
  {
    date: new Date("2023-2-10"),
    transactionCryptoName: "Bitcoin",
    otherUser: "From Badgley",
    quantity: "+0.0020 BTC",
    transactionType: "Purchased",
    availableBalance: "+$1,800",
  },
];

export const USER_INVEST = {
  totalLabel: "Total Investment",
  totalInvestment: "$ 11,99,204",
  totalInvestChange: "-1.2%",
  cryptoName: "Bitcoin",
  cryptoChange: "+8.2%",
  cryptoPrice: "$ 12,400",
  userWalletAmount: "$1,234.56",
  userInitialData: "$0.00",
};

export const TRADE_GRAPH_DATA = [
  {
    id: "japan",
    color: "hsl(283, 70%, 50%)",
    data: [
      {
        x: "SEPT 8",
        y: 25,
      },
      {
        x: "SEPT 15",
        y: 259,
      },
      {
        x: "SEPT 22",
        y: 49,
      },
      {
        x: "SEPT 29",
        y: 294,
      },
      {
        x: "OCT 6",
        y: 100,
      },
      {
        x: "OCT 13",
        y: 241,
      },
    ],
  },
];
