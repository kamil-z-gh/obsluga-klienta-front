import type { NextPage } from "next";
import { getToken, removeToken } from "common/auth/tokens";
import { useRouter } from "next/router";
import ROUTES from "common/constants/paths";
import NavBar from "components/NavBar";
import Logo from "../../assets/logo.svg";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
const IndexPage: NextPage = () => {
  const router = useRouter();

  if (typeof window !== "undefined" && !getToken()) {
    router.push(ROUTES.CMS_LOGIN);
  }

  const handleLogout = () => {
    removeToken();
    router.push(ROUTES.CMS_LOGIN);
  };

  const handleRedirectToIndex = () => {
    router.push(ROUTES.HOME);
  };

  return (
    <>
      <NavBar
        logo={<Logo />}
        onLogoClick={handleRedirectToIndex}
        logoutBtnLabel="wyloguj"
        onLogoutBtnClick={handleLogout}
      />

      <Container maxWidth="lg">
        <Box mt={4} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            Dodaj
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default IndexPage;
