import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
import { AboutMe, Contact, Skill } from "../Constants/TextConstants";

export default function CrumbNavAboutMenu() {
    return(
        <Breadcrumbs aria-label="about me breadcrumb">
            <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit">
                {AboutMe}
            </Link>
            <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit">
                {Skill}
            </Link>
            <Link
            underline="hover"
            sx={{ display: 'flex', alignItems: 'center' }}
            color="inherit">
                {Contact}
            </Link>
        </Breadcrumbs>
    )
}