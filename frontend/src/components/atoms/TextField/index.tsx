import Divider from "@mui/material/Divider";
import filter from "../../../../public/assets/icons/filter.png";
import search from "../../../../public/assets/icons/search.png";
import styled from "@emotion/styled";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  OutlinedInputProps,
} from "@mui/material";
import theme from "../../../theme";
import openEye from "../../../../public/assets/icons/openEye.svg";
import closeEye from "../../../../public/assets/icons/closedEye.svg";
import { useState } from "react";
import IconAtom from "../Icon";

export interface InputBaseProps extends OutlinedInputProps {
  isTwoIconRequired: boolean;
  isIconRequired: boolean;
  placeholder: string;
  isPasswordIconRequired: boolean;
  label: string;
}

const StyleOutlineInput = styled(OutlinedInput)({
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  border: `1px solid ${theme.palette.gamma_grey[100]}`,
  boxShadow: "none",
  width: "100%",
  height: "48px",
  backgroundColor: theme.palette.primary.contrastText,
  "& input": {
    "::placeholder": {
      fontFamily: "GraphikRegular",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "22px",
      letterSpacing: "0.16px",
      color: theme.palette.beta_text.medium_emphasis,
    },
  },
});

const CustomizedInputBase = ({
  isTwoIconRequired,
  isIconRequired,
  placeholder,
  isPasswordIconRequired,
  label,
  ...rest
}: InputBaseProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <FormControl variant="outlined">
      <StyleOutlineInput
        id="textfield-input"
        label={label}
        placeholder={placeholder}
        type={showPassword ? "password" : "text"}
        endAdornment={
          <InputAdornment position="end">
            {isPasswordIconRequired && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <IconAtom
                    src={closeEye}
                    alt="closeIcon"
                    height="20px"
                    width="20px"
                  />
                ) : (
                  <IconAtom
                    src={openEye}
                    alt="openIcon"
                    height="20px"
                    width="20px"
                  />
                )}
              </IconButton>
            )}
            {isIconRequired && (
              <img src={search} alt="searchicon" width="32px" height="32px" />
            )}
            {isTwoIconRequired && (
              <>
                <img src={search} alt="searchicon" width="32px" height="32px" />
                <Divider sx={{ height: 28, m: 1 }} orientation="vertical" />
                <img src={filter} alt="filtericon" width="32px" height="32px" />
              </>
            )}
          </InputAdornment>
        }
        {...rest}
      />
    </FormControl>
  );
};

export default CustomizedInputBase;
