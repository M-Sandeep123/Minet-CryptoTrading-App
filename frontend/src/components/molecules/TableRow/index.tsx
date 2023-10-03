import {
  TableRow,
  TableCell,
  Stack,
  styled,
  Box,
  SxProps,
} from "@mui/material";
import { Theme } from "@emotion/react";

import theme from "../../../theme";
import IconAtom from "../../atoms/Icon";
import CustomTypography from "../../atoms/Typography";
import empty from "/public/assets/icons/watchlistStar.png";
import filled from "/public/assets/icons/watchlistStarFilled.png";

export interface TableRowProps {
  onClick: () => void;
  coinName: string;
  coinSrc: string;
  coinCaption: string;
  coinPrice: number;
  coinChange: string;
  coinMarketCap: string;
  coinWatchlisted: boolean;
  boxClick?: () => void;
  sx?: SxProps<Theme>;
  style?: React.CSSProperties;
}

export const CustomTableRow = ({
  sx,
  style,
  coinName,
  coinSrc,
  coinCaption,
  coinPrice,
  coinChange,
  coinMarketCap,
  coinWatchlisted,
  onClick,
  boxClick,
}: TableRowProps) => {
  return (
    <Wrapper>
      <TableRow className="tableRow" sx={sx} style={style} data-testid="row">
        <TableCell className="firstCell">
          <Stack direction="row" alignItems="center" spacing={1}>
            <img src={coinSrc} alt="coinName" width="42px" height="42px" />
            <Stack alignItems="flex-start" spacing={0.5}>
              <CustomTypography
                data-testid="row-name"
                variant="body1"
                label={coinName}
                color={theme.palette.beta_text.high_emphasis}
                onClick={boxClick}
                sx={{ cursor: "pointer" }}
              />
              <CustomTypography
                variant="overline"
                label={coinCaption}
                color={theme.palette.beta_text.medium_emphasis}
              />
            </Stack>
          </Stack>
        </TableCell>
        <TableCell className="secondCell">
          <CustomTypography
            variant="body2"
            label={`$${coinPrice}`}
            color={theme.palette.beta_text.high_emphasis}
          />
        </TableCell>
        <TableCell className="thirdCell">
          <CustomTypography
            variant="body2"
            label={`${coinChange.substring(0, 5)}%`}
            color={
              coinChange.includes("-")
                ? theme.palette.gamma_error[500]
                : theme.palette.gamma_success[500]
            }
          />
        </TableCell>
        <TableCell className="fourthCell">
          <CustomTypography
            variant="body2"
            label={coinMarketCap}
            color={theme.palette.beta_text.high_emphasis}
          />
        </TableCell>
        <TableCell className="fifthCell">
          <IconAtom
            src={coinWatchlisted ? filled : empty}
            width="32px"
            height="32px"
            onClick={onClick}
            data-testid="star-icon"
          />
        </TableCell>
      </TableRow>
    </Wrapper>
  );
};

const Wrapper = styled(Box)(`
  .tableRow{
    border-radius: 4px;
    border: 1px solid var(--gamma-grey-100, #E8E8F7);
    background: var(--gamma-grey-white, #FFF);
    display: flex;
    align-items: center;
    padding: 5px ;
    justify-content:space-between;
  }
  .firstCell{
    min-width: 300px;
    height: 24px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    border-bottom:0;
  }
  .secondCell{
    min-width: 337px;
    height: 24px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom:0;
  }
  .thirdCell{
    min-width: 239px;
    height: 24px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom:0;
  }
  .fourthCell{
    min-width: 237px;
    height: 24px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom:0;
  }
  .fifthCell{
    min-width: 78px;
    height: 24px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom:0;
  }
`);
