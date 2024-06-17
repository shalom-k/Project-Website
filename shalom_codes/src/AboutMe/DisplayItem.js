import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";

export default function DisplayItem(props) {
    return(
        <Fragment>
            <Grid item xs={12}>
                <Typography variant="h2" >{props.title}</Typography>
            </Grid>    
            <Grid  item xs={12} md={6} lg={9}>
                {props.content}
            </Grid>
            <Grid  item xs={12} md={6} lg={3}>
                {props.image}
            </Grid>
        </Fragment>
    )
}