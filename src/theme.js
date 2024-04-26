import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
            },
        },
    },
});

export default theme;