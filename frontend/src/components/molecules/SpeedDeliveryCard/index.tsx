import React, { useState } from "react";
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../../theme";
import CustomTypography from "../../atoms/Typography";
import TypographyWithIcon from "../TypographyWithIcon";
import delivery from "../../../../public/assets/icons/delivery.png";
import IconAtom from "../../atoms/Icon";
import chevronDown from "../../../../public/assets/icons/chevron-down.png";

interface Option {
  value: string;
  name: string;
  time: string;
  fees: string;
}

export interface SpeedDeliveryCardProps {
  initialValue: string;
  options: Option[];
  getSelectedOption:(e:string)=>void;
}

const StyledOptionBox = styled(Box)({
  width: "100%",
  paddingTop: 16,
  paddingLeft: 48,
  paddingRight: 24,
  justifyContent: "space-between",
  alignItems: "flex-start",
  display: "inline-flex",
});

const StyledOptionInnerBox = styled(Box)({
  alignItems: "flex-start",
  gap: 4,
  display: "inline-flex",
});

const ChevronDownIcon = () => (
  <IconAtom src={chevronDown} alt="icon" style={{ paddingRight: "16px" }} />
);
const SpeedDeliveryCard: React.FC<SpeedDeliveryCardProps> = ({ ...props }) => {
  const [selectValue, setSelectValue] = useState(props.initialValue);

  const changeSelectValue = (e: SelectChangeEvent) => {
    setSelectValue(e.target.value);
    props.getSelectedOption(e.target.value)
  };

  const renderValue = (selected: string) => {
    const selectedOption = props.options.find(
      (option) => option.value === selected
    );
    return (
      <div style={{ display: "flex", alignItems: "center", }}>
        {selectValue && (
          <TypographyWithIcon
            src={delivery}
            width="32px"
            height="32px"
            variant1="body1"
            label1={`${selectedOption?.name} ${selectedOption?.time}`}
            color1={theme.palette.beta_text.high_emphasis}
            typography2={
              <CustomTypography
                variant="caption1"
                label={`Transaction fees: ${selectedOption?.fees.substring(
                  16
                )}`}
                color={theme.palette.beta_text.medium_emphasis}
              />
            }
          />
        )}
      </div>
    );
  };

  return (
    <FormControl
      sx={{
        width: "100%",
        height: 34,
      }}
    >
      <Select
        displayEmpty
        value={selectValue}
        onChange={changeSelectValue}
        renderValue={renderValue}
        IconComponent={ChevronDownIcon}
        sx={{
          
          backgroundColor: "transparent",
          "&.Mui-selected": {
            backgroundColor: theme.palette.gamma_grey[50],
          },
        }}
      >
        {props.options.map((opt) => (
          <MenuItem
            key={opt.value}
            value={opt.value}
            sx={{
              "&.Mui-selected": {
                backgroundColor: theme.palette.gamma_grey[50],
              },
              ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                {
                  padding: "6px",
                },

              border: `1px solid ${theme.palette.gamma_grey[100]}`,

              backgroundColor:
                selectValue === opt.value
                  ? theme.palette.gamma_grey[50]
                  : "transparent",
            }}
          >
            <StyledOptionBox>
              <StyledOptionInnerBox>
                <CustomTypography
                  variant="body2"
                  label={opt.name}
                  color={theme.palette.beta_text.high_emphasis}
                />
                <CustomTypography
                  variant="body1"
                  label={opt.time}
                  color={theme.palette.beta_text.high_emphasis}
                />
              </StyledOptionInnerBox>
              <CustomTypography
                variant="caption2"
                label={opt.fees}
                color={theme.palette.beta_text.medium_emphasis}
              />
            </StyledOptionBox>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SpeedDeliveryCard;
