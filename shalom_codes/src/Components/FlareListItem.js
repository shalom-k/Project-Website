import { ListItem, ListItemText, ListItemIcon  } from "@mui/material";

import FlareIcon from '@mui/icons-material/Flare';
export default function FlareListItem(props) {
  return (
    <ListItem>
      <ListItemIcon>
        <FlareIcon />
      </ListItemIcon>
      <ListItemText primary={props.text} />
    </ListItem>
  );
}
