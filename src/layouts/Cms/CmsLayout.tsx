import NavBar, { NavBarProps } from "components/NavBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button, { ButtonProps } from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

export interface CmsLayoutProps {
  navBarProps: NavBarProps;
  onAddBtnClick: ButtonProps["onClick"];
  onBrowseBtnClick: ButtonProps["onClick"];
  children: React.ReactNode;
}

/**
 * Komponent renderujący layout panelu administratora
 * @param {NavBarProps}  navBarProps - prop kształtu opcji komponentu NavBar, do którego przekazuje swoje opcje
 * @param {React.MouseEventHandler<HTMLButtonElement>} onAddBtnClick - funkcja uruchamiana w momencie naciśnięcia na przycisk dodawania
 * @param {React.MouseEventHandler<HTMLButtonElement>} onBrowseBtnClick - funkcja uruchamiająca się po naciśnięciu na przycisk przeglądania
 * @param {React.ReactNode} children - zawartość strony
 * */
const CmsLayout = ({
  navBarProps,
  children,
  onAddBtnClick,
  onBrowseBtnClick,
}: CmsLayoutProps) => {
  return (
    <>
      <NavBar
        logo={navBarProps.logo}
        logoutBtnLabel={navBarProps.logoutBtnLabel}
        onLogoutBtnClick={navBarProps.onLogoutBtnClick}
      />
      <Container maxWidth="lg">
        <Box mt={3} display="flex" justifyContent="flex-end">
          <Box mr={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={onBrowseBtnClick}
            >
              Przeglądaj
            </Button>
          </Box>
          <Button variant="contained" color="primary" onClick={onAddBtnClick}>
            Nowy
          </Button>
        </Box>
        <Box mt={3} mb={3}>
          <Divider />
        </Box>

        {children}
      </Container>
    </>
  );
};

export default CmsLayout;
