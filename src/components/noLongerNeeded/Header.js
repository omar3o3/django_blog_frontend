import React from "react";
import { NavLink } from "react-router-dom";
// import { Link as RouterLink} from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import CssBaseline from "@mui/material/CssBaseline";

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//   },
//   link: {
//     margin: theme.spacing(1, 1.5),
//   },
//   toolbarTitle: {
//     flexGrow: 1,
//   },
// }));

function Header() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar >
          <Typography
            variant="h6"
            color="inherit"
            noWrap
          >
            <Link
              component={NavLink}
              to="/"
              underline="none"
              color="textPrimary"
            >
              Blog
            </Link>
          </Typography>
          <nav>
            <Link
              color="textPrimary"
              href="#"
              component={NavLink}
              to="/register"
            >
              Register
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            component={NavLink}
            to="/login"
          >
            Login
          </Button>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            component={NavLink}
            to="/logout"
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
