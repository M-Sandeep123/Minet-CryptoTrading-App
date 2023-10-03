import { Stack, styled } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ChipAtom from "../../atoms/Chip";
import theme from "../../../theme";

interface ChipDataType {
  label: string;
  bgColor: string;
  isSelected: boolean;
}

interface PropsTypes {
  chipListData: ChipDataType[];
}

const StyledContainer = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "16px",
  width: "100%",
});

const ChipList = ({ chipListData }: PropsTypes) => {
  return (
    <StyledContainer>
      <KeyboardArrowLeftIcon />
      {chipListData.map((opt) => (
        <ChipAtom
          key={opt.label}
          label={opt.label}
          style={{
            backgroundColor: `${opt.bgColor}33`,
            borderRadius: "4px",
            border: opt.isSelected ? `2px solid ${opt.bgColor}` : "none",
            ...theme.typography.body2,
          }}
        />
      ))}
      <KeyboardArrowRightIcon />
    </StyledContainer>
  );
};

export default ChipList;
