import styled from "@emotion/styled";
import theme from "../../../theme";
import ChipAtom from "../../atoms/Chip";
import CustomTypography from "../../atoms/Typography";
import TypographyWithIcon, {
  TypographyWithIconProps,
} from "../TypographyWithIcon";
import { Box } from "@mui/material";
import IconAtom from "../../atoms/Icon";
import { GRAPH_LABEL } from "../../../constants";
import { ResponsiveLine } from "@nivo/line";

interface WatchlistCardProps extends TypographyWithIconProps {
  variant: string;
  label: string;
  color: string;
  graphLabel: string;
  graphVariant: string;
  graphColor: string;
  graphData: any;
  iconSrc: string;
  totalLength: number;
  boxId?: number;
  onClick?: () => void;
}
const StyledChip = styled(ChipAtom)({
  "& .MuiChip-label": {
    paddingLeft: "0px",
    paddingRight: "0px",
  },
  borderRadius: "100px",
  height: "18px",
  width: "41px",
  backgroundColor: theme.palette.gamma_grey[50],
  color: theme.palette.beta_text.medium_emphasis,
  textTransform: "none",
  display: "inline-flex",
  gap: "4px",
});

const StyledOuterBox = styled(Box)({
  alignItems: "flex-start",
  display: "inline-flex",
  height: "90px",
  padding: "20px",
  borderRadius: "4px",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
  justifyContent: "space-between",
  cursor: "pointer",
});

const StyledInnerBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const StyledChipBox = styled(Box)({
  paddingLeft: "56px",
});

const StyledInnerGraphBox = styled(Box)({
  flexDirection: "column",
  alignItems: "flex-end",
  display: "flex",
  justifyContent: "flex-end",
});

const StyledInnerGraphTypoBox = styled(Box)({
  width: "100%",
  height: "100%",
  alignItems: "center",
  display: "inline-flex",
  justifyContent: "flex-end",
});

const StyledGraphBox = styled(Box)({
  height: "78px",
});

const WatchlistCard: React.FC<WatchlistCardProps> = ({ ...props }) => {
  return (
    <StyledOuterBox
      onClick={props.onClick}
      width={props.totalLength % 2 !== 0 ? "100%" : "46.1%"}
    >
      <StyledInnerBox>
        <TypographyWithIcon
          src={props.src}
          width={props.width}
          height={props.height}
          variant1={props.variant1}
          label1={props.label1}
          color1={props.color1}
          typography2={
            <CustomTypography
              variant={props.variant}
              label={props.label}
              color={props.color}
            ></CustomTypography>
          }
        />

        <StyledChipBox>
          <StyledChip
            label={GRAPH_LABEL}
            sx={{ width: "41px", height: "18px" }}
            style={{
              borderRadius: "100px",
              background: theme.palette.grey[100],
              ...theme.typography.overline,
              color: theme.palette.beta_text.medium_emphasis,
              textTransform: "none",
            }}
          />
        </StyledChipBox>
      </StyledInnerBox>
      <StyledInnerGraphBox>
        <StyledInnerGraphTypoBox>
          <IconAtom src={props.iconSrc} alt="iconimage"></IconAtom>
          <CustomTypography
            variant={props.graphVariant}
            label={props.graphLabel}
            color={props.graphColor}
          ></CustomTypography>
        </StyledInnerGraphTypoBox>

        <StyledGraphBox
          width={props.totalLength % 2 !== 0 ? "600px" : "133.65px"}
        >
          <ResponsiveLine
            data={props.graphData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            xScale={{ type: "linear" }}
            yScale={{
              type: "linear",
            }}
            axisTop={null}
            axisRight={null}
            axisLeft={null}
            axisBottom={null}
            curve="monotoneX"
            enableGridX={false}
            enableGridY={false}
            colors={props.graphData[0].color}
            enablePoints={false}
            enableArea={true}
            areaOpacity={0.1}
            isInteractive={false}
            useMesh={true}
            animate={false}
          />
        </StyledGraphBox>
      </StyledInnerGraphBox>
    </StyledOuterBox>
  );
};

export default WatchlistCard;
