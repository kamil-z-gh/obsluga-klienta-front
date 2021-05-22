import NavBar, { NavBarProps } from "components/NavBar";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button, { ButtonProps } from "@material-ui/core/Button";

export interface CmsLayoutProps {
  navBarProps: NavBarProps;
  onAddBtnClick: ButtonProps["onClick"];
  children: React.ReactNode;
}

const CmsLayout = ({
  navBarProps,
  children,
  onAddBtnClick,
}: CmsLayoutProps) => {
  return (
    <>
      <NavBar
        logo={navBarProps.logo}
        onLogoClick={navBarProps.onLogoClick}
        logoutBtnLabel={navBarProps.logoutBtnLabel}
        onLogoutBtnClick={navBarProps.onLogoutBtnClick}
      />
      <Container maxWidth="lg">
        <Box mt={4} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={onAddBtnClick}>
            Dodaj
          </Button>
        </Box>
        {children}
      </Container>
    </>
  );
};

export default CmsLayout;
