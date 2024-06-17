import { Grid, Stack, Typography } from "@mui/material";
import programmer_img from "../Images/undraw_programmer.svg"
import certification_img from "../Images/undraw_certification.svg"
import contact_img from "../Images/undraw_contact.svg"
import FlareListItem from "../Components/FlareListItem";
import DisplayItem from "./DisplayItem";

export default function MyInformationPage() {
    return(
        <Stack columnSpacing={4}>
            <Typography variant="h1" >Learn more about me</Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                columnSpacing={4}>
                <DisplayItem
                    title="About Shalom"
                    content={
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            columnSpacing={2}>
                            <Typography variant="body">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec luctus nibh. Nulla ante metus, rutrum vel orci 
                                vitae, imperdiet suscipit mi. Cras eget libero mi. Praesent auctor viverra ante in elementum. Nullam pretium 
                                lorem at auctor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                                Vivamus lobortis sem mi, et consectetur urna blandit quis. Vestibulum velit erat, aliquet ut blandit sit amet, 
                                maximus id dolor. Suspendisse tortor lorem, pretium a mattis eu, pulvinar non dolor. Etiam facilisis sem vel 
                                viverra molestie. Aenean tristique ornare libero, sit amet gravida dolor maximus at.
                            </Typography>
                            <Typography variant="body">
                                Nullam lectus urna, pellentesque vel est in, semper sollicitudin urna. Nam lobortis egestas urna elementum 
                                vehicula. Aenean gravida tempor dui, eget congue nunc porta quis. Ut laoreet congue lacinia. Ut varius augue 
                                imperdiet dui feugiat, in hendrerit erat egestas. Class aptent taciti sociosqu ad litora torquent per conubia 
                                nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac 
                                turpis egestas. Ut aliquam justo et condimentum mollis. In pretium, nunc in consectetur maximus, nibh lectus 
                                mollis odio, venenatis hendrerit nisl lacus vitae eros. Nunc nec nulla malesuada, feugiat magna in, eleifend felis.
                            </Typography>
                        </Stack>
                    }
                    image= {<img src={programmer_img} alt="girl programming" width={"80%"}/>}
                />
                <DisplayItem
                    title="My Skills"
                    content={
                        <Stack
                        justifyContent="center"
                        alignItems="center"
                        columnSpacing={2}>
                            <FlareListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec luctus nibh. Nulla ante metus, rutrum vel orci" />
                            <FlareListItem text="vitae, imperdiet suscipit mi. Cras eget libero mi. Praesent auctor viverra ante in elementum. Nullam pretium" />
                            <FlareListItem text="lorem at auctor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
                            <FlareListItem text="Vivamus lobortis sem mi, et consectetur urna blandit quis. Vestibulum velit erat, aliquet ut blandit sit amet," />
                            <FlareListItem text="maximus id dolor. Suspendisse tortor lorem, pretium a mattis eu, pulvinar non dolor. Etiam facilisis sem vel" />
                            <FlareListItem text="viverra molestie. Aenean tristique ornare libero, sit amet gravida dolor maximus at." />
                    </Stack>
                    }
                    image= {<img src={certification_img} alt="girl programming" width={"80%"}/>}
                />
                <DisplayItem
                    title="Contact Me"
                    content={
                        <Stack
                        justifyContent="center"
                        alignItems="center"
                        columnSpacing={2}>
                            <FlareListItem text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec luctus nibh. Nulla ante metus, rutrum vel orci" />
                            <FlareListItem text="vitae, imperdiet suscipit mi. Cras eget libero mi. Praesent auctor viverra ante in elementum. Nullam pretium" />
                            <FlareListItem text="lorem at auctor accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus." />
                            <FlareListItem text="Vivamus lobortis sem mi, et consectetur urna blandit quis. Vestibulum velit erat, aliquet ut blandit sit amet," />
                            <FlareListItem text="maximus id dolor. Suspendisse tortor lorem, pretium a mattis eu, pulvinar non dolor. Etiam facilisis sem vel" />
                            <FlareListItem text="viverra molestie. Aenean tristique ornare libero, sit amet gravida dolor maximus at." />
                    </Stack>
                    }
                    image= {<img src={contact_img} alt="girl programming" width={"80%"}/>}
                />
            </Grid>
        </Stack>
    )
}