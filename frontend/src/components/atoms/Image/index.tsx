import React from "react";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export interface PropsTypes {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  sx?: SxProps<Theme>;
  style?: React.CSSProperties;
  onError?: () => void;
}

const ImageAtom = (props: PropsTypes) => (
  <img data-testid="image" {...props} />
);

export default ImageAtom;
