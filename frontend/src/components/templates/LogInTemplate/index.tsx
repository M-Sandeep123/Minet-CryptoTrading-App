import { Box, styled } from "@mui/material";

interface LogInTemplateProps {
  image?: React.ReactElement;
  content?: React.ReactElement;
}
export const LogInTemplate = ({ image, content }: LogInTemplateProps) => {
  return (
    <OuterWrapper>
      <InnerWrapper>{image}</InnerWrapper>
      {content}
    </OuterWrapper>
  );
};
const InnerWrapper = styled(Box)({
  width: "50%",
});
const OuterWrapper = styled(Box)({
  height: "100vh",
  display: "flex",
});
