import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  SelectProps,
} from "@mui/material";
import theme from "../../../theme";

interface Option {
  value: string;
  name: string;
}

interface DropdownProps extends SelectProps {
  initialValue: string;
  options: Option[];
  width?: string;
}

const Dropdown = ({ initialValue, options, width, ...rest }: DropdownProps) => {
  const [dropValue, setDropValue] = useState(options[0].value);

  const changeDropValue = (e: SelectChangeEvent) => {
    setDropValue(e.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: { width } }}>
      <Select
        value={dropValue}
        onChange={changeDropValue}
        sx={{
          height: "45px",
          backgroundColor: theme.palette.primary.contrastText,
        }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.name}
          </MenuItem>
        ))}
        ...rest
      </Select>
    </FormControl>
  );
};

export default Dropdown;
