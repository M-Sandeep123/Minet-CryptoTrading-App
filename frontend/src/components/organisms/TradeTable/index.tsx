import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  Tab,
  Tabs,
} from "@mui/material";
import theme from "../../../theme";
import { useEffect, useState } from "react";
import IconAtom from "../../atoms/Icon";
import Dropdown from "../../atoms/Dropdown";
import CustomTypography from "../../atoms/Typography";
import CustomizedInputBase from "../../atoms/TextField";
import { CustomTableRow } from "../../molecules/TableRow";
import switchImg from "/public/assets/icons/switch.png";
import {
  tradetablemessages,
  DropDownTimeData,
  assetsData,
  tradeTableColumnheaders,
} from "../../../constants";

import {
  getCryptoCurrencyData,
  getWatchlistData,
  removeWatchlistedData,
  updateWatchlistedData,
} from "../../../../utils/services/index";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../store/user";
import { useLocation } from "react-router";

type TradeData = {
  userId: number;
  cryptoName: string;
  cryptoSrc: string;
  cryptoCaption: string;
  cryptoPrice: number;
  cryptoChange: string;
  cryptoMarketCap: string;
  cryptoWatchlisted: boolean;
};

export const TradeTable = () => {
  const location = useLocation();
  const [tradeData, setTradeData] = useState<TradeData[]>([]);
  const [watchlistData, setWatchlistData] = useState<TradeData[]>([]);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedTab, setSelectedTab] = useState<string>(location.state.value);
  const [searchQuery, setSearchQuery] = useState("");

  const { userInfo } = useUser();

  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const tradeData = await getCryptoCurrencyData(userInfo.id);
    setTradeData(tradeData.data);

    const watchlistData = await getWatchlistData(userInfo.id);
    setWatchlistData(watchlistData.data);
  };

  const updateWatchlistData = async (data: any) => {
    if (selectedTab === "all") {
      if (data.cryptoWatchlisted === false) {
        data.userId = userInfo.id;
        data.cryptoWatchList = true;
        delete data.id;
        await updateWatchlistedData(data);
      } else {
        let id = 0;
        watchlistData.forEach((listData: any) => {
          if (listData.cryptoLabel === data.cryptoLabel) {
            id = listData.id;
          }
        });
        await removeWatchlistedData(id, data);
      }
    } else if (selectedTab === "watchlist") {
      await removeWatchlistedData(data.id, data);
    }

    fetchData();
  };

  const handleSwitch = () => {
    const sortedData = [...tradeData].sort((a, b) => {
      const aValue =
        parseFloat(a.cryptoMarketCap?.replace(/[^\d.-]/g, "")) || 0;
      const bValue =
        parseFloat(b.cryptoMarketCap?.replace(/[^\d.-]/g, "")) || 0;

      if (sortOrder === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    setTradeData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };

  const handleSearch = (event: any) => {
    const searchTerm = event.target.value;
    setSearchQuery(searchTerm);
  };

  const handleBoxClick = (selectedCryptoCoin: any) => {
    navigate?.(`/wallet-detail/${selectedCryptoCoin.cryptoLabel}`, {
      state: selectedCryptoCoin,
    });
  };

  return (
    <Wrapper>
      <CustomStack direction={"row"} justifyContent={"space-between"}>
        <Tabs className="tabs" value={selectedTab} onChange={handleTabChange}>
          <Tab
            data-testid="tab1"
            label={
              <CustomTypography
                variant="subtitle2"
                label={tradetablemessages.ALL_ASSETS}
                sx={{
                  textTransform: "none",
                  color:
                    selectedTab === "all"
                      ? theme.palette.primary[500]
                      : theme.palette.beta_text.medium_emphasis,
                }}
              />
            }
            value="all"
          />
          <Tab
            data-testid="tab2"
            label={
              <CustomTypography
                variant="subtitle2"
                color={theme.palette.beta_text.medium_emphasis}
                label={tradetablemessages.WATCH_LIST}
                sx={{
                  textTransform: "none",
                  color:
                    selectedTab === "watchlist"
                      ? theme.palette.primary[500]
                      : theme.palette.beta_text.medium_emphasis,
                }}
              />
            }
            value="watchlist"
          />
        </Tabs>
        <Stack
          direction={"row"}
          spacing={3}
          alignItems="flex-end"
          marginBottom={"10px"}
        >
          <CustomizedInputBase
            placeholder={tradetablemessages.TRADE_PLACEHOLDER_TEXT}
            isTwoIconRequired={false}
            isIconRequired={true}
            isPasswordIconRequired={false}
            label={""}
            onChange={handleSearch}
            className="search"
            data-testid="search-tool"
          />
          <CustomSelect
            initialValue={tradetablemessages.DROP_DOWN_TIMELINE_INITIAL_VALUE}
            options={DropDownTimeData}
            data-testid="dropdown-24h"
          />
          <CustomSelect
            initialValue={tradetablemessages.DROP_DOWN_ALL_ASSETS_INITIAL_VALUE}
            options={assetsData}
            data-testid="dropdown-allassets"
          />
        </Stack>
      </CustomStack>

      <Table className="custom-table">
        <TableHead>
          <TableRow className="table-row">
            <TableCell className="firstCell">
              <CustomTypography
                label={tradeTableColumnheaders[0].name}
                variant="caption1"
                color={theme.palette.gamma_grey[500]}
              />
            </TableCell>
            <TableCell className="secondCell">
              <CustomTypography
                label={tradeTableColumnheaders[1].price}
                variant="caption1"
                color={theme.palette.gamma_grey[500]}
              />
            </TableCell>
            <TableCell className="thirdCell">
              <CustomTypography
                label={tradeTableColumnheaders[2].change}
                variant="caption1"
                color={theme.palette.gamma_grey[500]}
              />
            </TableCell>
            <TableCell className="fourthCell">
              <Stack direction="row" spacing={0}>
                <CustomTypography
                  label={tradeTableColumnheaders[3].marketCap}
                  variant="caption1"
                  color={theme.palette.gamma_grey[500]}
                />
                <div className="arrow-icon">
                  <IconAtom
                    src={switchImg}
                    onClick={handleSwitch}
                    data-testid="cap-icon"
                  />
                </div>
              </Stack>
            </TableCell>
            <TableCell className="fifthCell">
              <CustomTypography
                label={tradeTableColumnheaders[4].watch}
                variant="caption1"
                color={theme.palette.gamma_grey[500]}
              />
            </TableCell>
          </TableRow>
        </TableHead>
        {selectedTab === "all" && (
          <TableBody>
            {tradeData
              .filter((coinData: any) =>
                coinData.cryptoName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase())
              )
              .map((coinData: any, index: any) => (
                <CustomTableRow
                  key={coinData.id}
                  coinName={coinData.cryptoName}
                  coinSrc={coinData.cryptoSrc}
                  coinCaption={coinData.cryptoLabel}
                  coinPrice={coinData.cryptoPrice}
                  coinChange={coinData.cryptoChange}
                  coinMarketCap={coinData.cryptoMarketCap}
                  coinWatchlisted={coinData.cryptoWatchlisted}
                  sx={{ mb: 1 }}
                  onClick={() => updateWatchlistData(coinData)}
                  boxClick={() => handleBoxClick(coinData)}
                />
              ))}
          </TableBody>
        )}
        {selectedTab === "watchlist" && (
          <TableBody>
            {watchlistData
              .filter(
                (item: any) =>
                  item.cryptoName
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) &&
                  (selectedTab === "watchlist" || item.cryptoWatchlisted)
              )
              .map((item: any, index: any) => (
                <CustomTableRow
                  key={item.id}
                  coinName={item.cryptoName}
                  coinSrc={item.cryptoSrc}
                  coinCaption={item.cryptoLabel}
                  coinPrice={item.cryptoPrice}
                  coinChange={item.cryptoChange}
                  coinMarketCap={item.cryptoMarketCap}
                  coinWatchlisted={item.cryptoWatchList}
                  sx={{ mb: 1 }}
                  onClick={() => updateWatchlistData(item)}
                  boxClick={() => handleBoxClick(item)}
                />
              ))}
          </TableBody>
        )}
      </Table>
    </Wrapper>
  );
};
const Wrapper = styled(Box)(`
height:70.3%;
.searchClass{
  width:90.7%,
}
.tabs{
  width: '69%',
  padding-eft: '30px',
  margin-bottom: '10px',
  margin-top: '10px',
  border-bottom: 1,
  border-color: theme.palette.gamma_grey[100]
}
.custom-table {
  width: 100%;
  height: 70.03%;
}
.table-row {
  display: flex;
  padding: 0px 24px;
  align-items: flex-start;
  justify-content: space-between;
  margin-top:10px;
  height:50px;
}
.arrow-icon{
  margin-top: -8px;
  margin-left: -8px;
  cursor:pointer;
}
.firstCell{
  min-width: 300px;
  min-height: 3px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  border-bottom:0;
}
.secondCell{
  min-width: 337px;
  min-height: 3px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-bottom:0;
}
.thirdCell{
  min-width: 239px;
  min-height: 3px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-bottom:0;
}
.fourthCell{
  min-width: 237px;
  min-height: 3px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-bottom:0;
}
.fifthCell{
  min-width: 78px;
  min-height: 3px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-bottom:0;
}
.droptime{
  height:20px
}
.css-1o97bnz-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root{
  height:47px;
}
.css-1qomd9u-MuiInputBase-root-MuiOutlinedInput-root{
  font-family: GraphikRegular;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px; /* 137.5% */
  letter-spacing: 0.16px;
  color:#343446
}
`);
const CustomStack = styled(Stack)({
  width: "100%",
});
const CustomSelect = styled(Dropdown)({
  ...theme.typography.body1,
  color: theme.palette.gamma_grey[500],
});
