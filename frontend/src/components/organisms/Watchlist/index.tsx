import { Box, Divider, Stack } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import theme from "../../../theme";
import IconAtom from "../../atoms/Icon";
import chevronLeftBlue from "../../../../public/assets/icons/chevronLeftBlue.svg";
import gridBlue from "../../../../public/assets/icons/gridBlue.svg";
import listBlue from "../../../../public/assets/icons/listBlue.svg";
import editBlue from "../../../../public/assets/icons/editBlue.svg";
import styled from "@emotion/styled";
import WatchlistCard from "../../molecules/WatchlistCard";

interface WatchlistProps {
  onClickDiscovery: () => void;
  onClickWatchList: () => void;
  watchlistData: any[];
}

const Watchlist: React.FC<WatchlistProps> = ({
  watchlistData,
  onClickDiscovery,
  onClickWatchList,
  ...props
}) => {
  let oddData = [];
  if (watchlistData.length % 2 !== 0) {
    oddData.push(watchlistData.pop());
  }
  return (
    <StyleOuterBox>
      <StyledStack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          data-testid="stack-discovery-1"
        >
          <CustomTypography
            variant={"subtitle1"}
            label={"Watchlist"}
            color={theme.palette.beta_text.high_emphasis}
          ></CustomTypography>
          <StyledBox>
            <CustomTypography
              variant={"caption1"}
              label={"Discover assets"}
              color={theme.palette.primary[500]}
              onClick={onClickDiscovery}
              data-testid="discovery"
            ></CustomTypography>
            <IconAtom src={chevronLeftBlue} alt="chevronicon"></IconAtom>
          </StyledBox>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <StyledBox onClick={() => {}}>
            <CustomTypography
              variant={"caption1"}
              label={"View Watchlist"}
              color={theme.palette.primary[500]}
              onClick={onClickWatchList}
              data-testid="view-watchlist"
            ></CustomTypography>
            <IconAtom src={editBlue} alt="editIcon"></IconAtom>
          </StyledBox>
          <StyledBox>
            <IconAtom src={gridBlue} alt="gridIcon"></IconAtom>
            <IconAtom src={listBlue} alt="listIcon"></IconAtom>
          </StyledBox>
        </Stack>
      </StyledStack>
      <StyleWatchListOuterBox>
        <StyleWatchListInnerBox>
          {watchlistData.map((item, i) => (
            <WatchlistCard
              key={item.id}
              variant={item.variant}
              label={item.label}
              color={item.color}
              graphLabel={item.graphLabel}
              graphVariant={item.graphVariant}
              graphColor={item.graphColor}
              iconSrc={item.iconSrc}
              src={item.src}
              width={item.width}
              height={item.height}
              variant1={item.variant1}
              label1={item.label1}
              graphData={item.graphData}
              totalLength={watchlistData.length}
              boxId={i}
              data-testid="graph"
            />
          ))}
          {oddData.length !== 0 && (
            <WatchlistCard
              key={oddData[0].id}
              variant={oddData[0].variant}
              label={oddData[0].label}
              color={oddData[0].color}
              graphLabel={oddData[0].graphLabel}
              graphVariant={oddData[0].graphVariant}
              graphColor={oddData[0].graphColor}
              iconSrc={oddData[0].iconSrc}
              src={oddData[0].src}
              width={oddData[0].width}
              height={oddData[0].height}
              variant1={oddData[0].variant1}
              label1={oddData[0].label1}
              graphData={oddData[0].graphData}
              totalLength={oddData.length}
              boxId={100}
              data-testid="graph"
            />
          )}
        </StyleWatchListInnerBox>
      </StyleWatchListOuterBox>
    </StyleOuterBox>
  );
};

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

const StyledStack = styled(Box)({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "32px",
});

const StyleOuterBox = styled(Box)({
  height: "328px",
  gap: "12px",
  display: "flex",
  flexDirection: "column",
});

const StyleWatchListOuterBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  overflowY: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "3px",
  },
  height:"300px",
});

const StyleWatchListInnerBox = styled(Box)({
  flexGrow: 1,
  minWidth: "50%",
  height: "200px",
  display: "flex",
  flexWrap: "wrap",
  gap: "12px",
});

export default Watchlist;
