import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#676767",
    secondary: "#ffff00"
}

const theme = createTheme({
    palette: {
        // primary: {
        //     main: Colors.primary
        // },
        secondary: {
            main: Colors.secondary
        }
        
    }
})

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})

export default theme;