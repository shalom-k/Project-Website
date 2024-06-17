import { Fragment } from "react";
import useToggle from "../Utils/useToggle";
import { AppBar, Button, Drawer, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";
import {ArrowForward, MenuOpen} from "@mui/icons-material";
import { About, AppName, Projects, Skills } from "../Constants/TextConstants";

export default function MyAppBar() {
  const [openDrawer, toggleOpenDrawer] = useToggle();

  const menuItems = () => (
    <Fragment>
      <Button color="inherit">
        {About}
      </Button>
      <Button color="inherit">
        {Skills}
      </Button>
      <Button color="inherit">
        {Projects}
      </Button>
    </Fragment>
  );

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={1} alignItems={"center"}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "30px" }}
            component="div"
          >
            {AppName}
          </Typography>
        </Stack>
        {/*toolbar to display on large screen size*/}
        <Stack
          direction="row"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {menuItems()}
        </Stack>

        {/*draw to display on small screen size*/}
        <Stack sx={{ display: { md: "none" } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleOpenDrawer}
            sx={{ mr: 2 }}
          >
            <MenuOpen />
          </IconButton>
        </Stack>

        <Drawer open={openDrawer} onClose={toggleOpenDrawer} anchor="right">
          <Stack direction="column">
            <Toolbar />
            <AppBar
              position="static"
              sx={{
                flexGrow: 1,
                width: { sm: `100%` },
              }}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={toggleOpenDrawer}
                  sx={{ mr: 2 }}
                >
                  <ArrowForward />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Stack direction="column" spacing={2}>
              {menuItems()}
            </Stack>
          </Stack>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
