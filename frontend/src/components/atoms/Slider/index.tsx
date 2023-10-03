import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import MuiSlider, { SliderProps } from "@mui/material/Slider";
import { styled } from "@mui/material";

interface PropsType extends SliderProps {
  getSlideValue: (e: number) => void;
}

const StyledSlider = styled(MuiSlider)(({ theme }) => ({
  color: theme.palette.beta_text.light_emphasis,
  "& .MuiSlider-track": {
    width: "0px",
  },
  "& .MuiSlider-rail": {
    opacity: "unset",
    width: "2px",
  },
  "& .MuiSlider-thumb": {
    height: "12px",
    width: "12px",
  },
}));

const StyledStack = styled(Stack)({
  width: "12px",
  height: "78px",
});

export default function Slider({ getSlideValue, ...rest }: PropsType) {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
    getSlideValue(newValue as number);
  };

  return (
    <Box>
      <StyledStack>
        <StyledSlider
          aria-label="select-amount"
          orientation="vertical"
          onChange={handleChange}
          defaultValue={0}
          value={value}
          {...rest}
        />
      </StyledStack>
    </Box>
  );
}
