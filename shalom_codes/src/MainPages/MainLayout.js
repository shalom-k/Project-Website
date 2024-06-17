import {Stack, Toolbar} from "@mui/material";
import MyAppBar from "../Components/MyAppBar";

export default function MainLayout({children}){
    return(
        <Stack>
            <MyAppBar/>
            <Toolbar />
            {children}
        </Stack>
    )
}