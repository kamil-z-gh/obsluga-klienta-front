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
