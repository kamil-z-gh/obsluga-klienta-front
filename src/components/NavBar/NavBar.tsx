import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button, { ButtonProps } from "@material-ui/core/Button";
import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

export interface NavBarProps {
  logo: React.ReactNode;
  onLogoClick: IconButtonProps["onClick"];
  onLogoutBtnClick: ButtonProps["onClick"];
  logoutBtnLabel: string;
}

export default function NavBar({
  logo,
  onLogoClick,
  onLogoutBtnClick,
  logoutBtnLabel,
}: NavBarProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Box display="flex" justifyContent="space-between" pl={2} pr={2}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={onLogoClick}
            >
              {logo}
            </IconButton>
            <Typography>Biuro Obsługi Turystycznej</Typography>
          </Box>

          <Button color="inherit" onClick={onLogoutBtnClick}>
            {logoutBtnLabel}
          </Button>
        </Box>
      </AppBar>
    </div>
  );
}
