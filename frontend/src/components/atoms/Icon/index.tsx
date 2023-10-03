import { SxProps, Theme } from "@mui/material";
export interface IconProps {
    src?: string;
    alt?: string;
    width?: string;
    height?: string;
    sx?: SxProps<Theme>;
    style?: React.CSSProperties;
    onError?: () => void;
    onClick?:()=>void;
  }
const IconAtom = (props: IconProps) => {
  return  <img {...props}/>
};

export default IconAtom;
