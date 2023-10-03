import { createTheme } from "@mui/material";
import {
  COLORS,
  body1,
  body2,
  button,
  caption1,
  caption2,
  h4,
  h6,
  overline,
  subtitle1,
  subtitle2,
} from "../constants";

declare module "@mui/material/styles" {
  interface CustomPalette {
    beta_text: Palette["primary"];
    gamma_success: Palette["primary"];
    gamma_warning: Palette["primary"];
    gamma_error: Palette["primary"];
    gamma_grey: Palette["primary"];
  }
  interface Palette extends CustomPalette {}

  interface CustomPaletteOptions {
    beta_text: PaletteOptions["primary"];
    gamma_success: PaletteOptions["primary"];
    gamma_warning: Palette["primary"];
    gamma_error: PaletteOptions["primary"];
    gamma_grey: PaletteOptions["primary"];
  }

  interface PaletteOptions extends CustomPaletteOptions {}

  interface CustomPaletteColor {
    light_emphasis?: string;
    medium_emphasis?: string;
    high_emphasis?: string;
    50?: string;
    100?: string;
    300?: string;
    500?: string;
    700?: string;
    900?: string;
  }

  interface PaletteColor extends CustomPaletteColor {}

  interface SimplePaletteColorOptions extends CustomPaletteColor {}

  interface CustomTypographyCSSProperties {
    h4: React.CSSProperties;
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface TypographyVariants extends CustomTypographyCSSProperties {}

  interface TypographyVariantsOptions extends CustomTypographyCSSProperties {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
    h4: true;
  }
}

const theme = createTheme({
  palette: {
    background: {
      default: "#FFFFFF",
    },
    primary: {
      main: COLORS.ALPHA_PRIMARY_500,
      100: COLORS.ALPHA_PRIMARY_100,
      300: COLORS.ALPHA_PRIMARY_300,
      500: COLORS.ALPHA_PRIMARY_500,
      900: COLORS.ALPHA_PRIMARY_900,
      contrastText: COLORS.GAMMA_GREY_WHITE,
    },
    beta_text: {
      main: COLORS.BETA_TEXT_MEDIUM_EMPHASIS,
      light_emphasis: COLORS.BETA_TEXT_LIGHT_EMPHASIS,
      medium_emphasis: COLORS.BETA_TEXT_MEDIUM_EMPHASIS,
      high_emphasis: COLORS.BETA_TEXT_HIGH_EMPHASIS,
      contrastText: "white",
    },
    gamma_success: {
      main: COLORS.GAMMA_SUCCESS_500,
      100: COLORS.GAMMA_SUCCESS_100,
      500: COLORS.GAMMA_SUCCESS_500,
    },
    gamma_warning: {
      main: COLORS.GAMMA_WARNING_300,
      100: COLORS.GAMMA_WARNING_100,
      300: COLORS.GAMMA_WARNING_300,
      contrastText: COLORS.GAMMA_GREY_WHITE,
      light: COLORS.GAMMA_WARNING_100,
      dark: COLORS.GAMMA_WARNING_300,
    },
    gamma_error: {
      main: COLORS.GAMMA_ERROR_500,
      100: COLORS.GAMMA_ERROR_100,
      500: COLORS.GAMMA_ERROR_500,
    },
    gamma_grey: {
      main: COLORS.GAMMA_GREY_100,
      50: COLORS.GAMMA_GREY_50,
      100: COLORS.GAMMA_GREY_100,
      300: COLORS.GAMMA_GREY_300,
      500: COLORS.GAMMA_GREY_500,
      700: COLORS.GAMMA_GREY_700,
      900: COLORS.GAMMA_GREY_900,
    },
  },
  typography: {
    fontFamily: "Graphik",
    fontSize: 13,
    h4: h4,
    h6: h6,
    subtitle1: subtitle1,
    subtitle2: subtitle2,
    body1: body1,
    body2: body2,
    button: button,
    caption1: caption1,
    caption2: caption2,
    overline: overline,
  },
});

export default theme;
