import React from "react";
import { Box } from "@mui/material";
import CustomTypography from "../../atoms/Typography";
import styled from "@emotion/styled";
import theme from "../../../theme";

export interface TimelineData {
  timelineLabel: string;
}

export interface TimelineProps {
  timeline: TimelineData[];
}

const StyledBox = styled(Box)({
  width: "304px",
  margin: "auto",
  flexGrow: 1,
  padding: "10px",
  borderRadius: "4px",
  border: "1px solid lightgrey",
  gap: "16px",
  flexDirection: "row",
  display: "flex",
  paddingBottom: "2px",
});

const TimelineBox = styled(Box)({
  width: "42px",
  height: "38px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  border: `${theme.palette.beta_text.contrastText}`,
  color: theme.palette.gamma_grey[500],
});

const ActiveTimelineBox = styled(Box)({
  width: "42px",
  height: "38px",
  textAlign: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  border: `${theme.palette.beta_text.contrastText}`,
  color: `${theme.palette.primary[500]}`,
});

const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <StyledBox>
      {timeline.map((option, index) =>
        index === 3 ? (
          <ActiveTimelineBox key={option.timelineLabel}>
            <CustomTypography
              variant={"caption2"}
              label={option.timelineLabel}
              sx={{
                borderBottom: `2px solid ${theme.palette.primary[500]}`,
                fontWeight: "600",
              }}
            />
          </ActiveTimelineBox>
        ) : (
          <TimelineBox key={option.timelineLabel}>
            <CustomTypography
              variant={"caption2"}
              label={option.timelineLabel}
            />
          </TimelineBox>
        )
      )}
    </StyledBox>
  );
};

export default Timeline;
