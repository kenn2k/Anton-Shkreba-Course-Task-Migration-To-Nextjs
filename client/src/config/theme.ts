import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#646cff",
      light: "#828bff",
      dark: "#484cbf",
      contrastText: "#fff",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },

          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
          },

          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "gray",
            borderWidth: "2px",
          },
        },
      },
    },
  },
});

export default theme;
