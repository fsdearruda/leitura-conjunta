import { extendTheme , type ThemeConfig} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, fonts: {
    body: "Jost, sans-serif",
} });

export default theme;
