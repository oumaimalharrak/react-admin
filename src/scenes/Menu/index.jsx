import { Box, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header";
import { tokens } from "../../Theme";

const Menu =()=>{
    const theme =useTheme();
    const colors = tokens(theme.palette.mode)
    return(
        <Box m="20px">
            <Header title="Menus" subtitle="Manage your Menu"/>
            <Box display="flex" justifyContent="space-between" m="20px">
                {/* Categories */}
                <Box flex="1 1 20%" p="15px" borderRadius="5px" backgroundColor={colors.primary[400]}>
                <Typography>Categories</Typography>
                </Box>

            </Box>
        </Box>
    )
}
export default Menu;