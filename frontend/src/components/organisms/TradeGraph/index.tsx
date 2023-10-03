import { ResponsiveLine } from "@nivo/line";
import { styled, Box, Paper } from "@mui/material";
import Timeline from "../../molecules/Timeline";
import { timeLineData } from "../../../constants";
import theme from "../../../theme";

const StyledGraphBox = styled(Box)({
  width: "100%",
  height: "100%",
});

const GraphLayout = styled(Box)({
  height: "225px",
});

export interface PropsType {
  graphData: any;
  flag: boolean;
  StockDataChange?: any;
  layoutWidth: string;
  layoutHeight: string;
  graphLayout: boolean;
}

const StatGraph = ({
  graphData,
  flag,
  StockDataChange,
  layoutHeight,
  layoutWidth,
  graphLayout,
}: PropsType) => {
  const Layout = styled(Paper)({
    width: layoutWidth,
    height: layoutHeight,
    padding: "24px",
    boxShadow: "none",
    border: "solid 1px #E8E8F7",
  });

  return (
    <Layout>
      <Box display={"flex"}>
        <Box flexGrow={1}>{StockDataChange}</Box>
        <Box alignSelf={"flex-end"}>
          <Timeline timeline={timeLineData} />
        </Box>
      </Box>
      <GraphLayout sx={{ height: graphLayout ? "170px" : "225px" }}>
        <StyledGraphBox>
          <ResponsiveLine
            data={graphData}
            margin={{ top: 70, right: 10, bottom: 30, left: 10 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: true,
              reverse: false,
            }}
            colors={["#FFA74F", "#0052FF"]}
            gridXValues={1}
            yFormat=" >-.2f"
            curve="basis"
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 10,
            }}
            enableGridX={false}
            areaOpacity={0.1}
            enablePoints={false}
            enableArea={true}
            theme={{}}
            legends={
              flag
                ? [
                    {
                      anchor: "bottom-right",
                      direction: "row",
                      justify: false,
                      translateX: 10,
                      translateY: -100,
                      itemsSpacing: -36,
                      itemDirection: "left-to-right",
                      itemWidth: 100,
                      itemHeight: 110,
                      symbolSize: 8,
                      symbolShape: "circle",
                    },
                  ]
                : []
            }
          />
        </StyledGraphBox>
      </GraphLayout>
    </Layout>
  );
};

export default StatGraph;
