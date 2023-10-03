import { Box, styled } from "@mui/material";
import AvatarAtom from "../../atoms/Avatar";
import IconAtom from "../../atoms/Icon";

interface PropsTypes {
  avatarSrc: string;
  iconSrc: string;
  avatarAlt: string;
  iconAlt: string;
  iconWidth?: string;
  iconHeight?: string;
}

const StyledContainer = styled(Box)({
  display: "flex",
  gap: "4px",
});

const AvatarIcon = ({
  avatarSrc,
  avatarAlt,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
}: PropsTypes) => {
  return (
    <StyledContainer>
      <AvatarAtom src={avatarSrc} alt={avatarAlt} />
      <IconAtom
        alt={iconAlt}
        src={iconSrc}
        width={iconWidth}
        height={iconHeight}
      />
    </StyledContainer>
  );
};

export default AvatarIcon;
