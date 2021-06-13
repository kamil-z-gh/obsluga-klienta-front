import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button, { ButtonProps } from "@material-ui/core/Button";

import Box from "@material-ui/core/Box";
import Link from "components/Link";
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
  onLogoutBtnClick?: ButtonProps["onClick"];
  logoutBtnLabel?: string;
}
/**
 * Komponent zwracający komponent NavBar znajdujący się na górze strony
 * @param {React.ReactNode}  logo - komponent/napis użyty jako logo
 * @param {React.MouseEventHandler<HTMLButtonElement>=} onLogoutBtnClick - funkcja uruchamiana po kliknięciu na ikonkę wylogowania. Jeśli nie podano - nie pojawi się przycisk
 * @param {string=} logoutBtnLabel - napis przycisku do wylogowania. Jeśli nie podano - nie pojawi się przycisk
 * */
function NavBar({ logo, onLogoutBtnClick, logoutBtnLabel }: NavBarProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Box
          display="flex"
          justifyContent="space-between"
          pl={2}
          pr={2}
          pt={1}
          pb={1}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Link href="/">
              <a>{logo}</a>
            </Link>
            <Box ml={2}>
              <Typography>Biuro obsługi turystycznej</Typography>
            </Box>
          </Box>

          {logoutBtnLabel && (
            <Button color="inherit" onClick={onLogoutBtnClick}>
              {logoutBtnLabel}
            </Button>
          )}
        </Box>
      </AppBar>
    </div>
  );
}

export default NavBar;
