// theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bg: "#1a1a2e",
      },
      "::-webkit-scrollbar": {
        width: "8px",
      },
      "::-webkit-scrollbar-track": {
        background: "#2e2e4e",
        borderRadius: "10px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "#393970",
        borderRadius: "10px",
        transition: "background-color 0.3s ease, width 0.3s ease",
      },
      "::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "#80fffb",
        width: "12px",
      },
      "::-webkit-scrollbar-corner": {
        background: "#1a1a2e",
      },
    },
  },
});

export default theme;
