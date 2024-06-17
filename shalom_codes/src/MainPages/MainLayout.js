import {Stack, Toolbar} from "@mui/material";
import MyAppBar from "../Components/MyAppBar";

export default function MainLayout(){
    return(
        <Stack>
            <MyAppBar/>
            <Toolbar />
        </Stack>
    )
}