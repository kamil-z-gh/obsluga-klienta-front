import CmsLayout from "layouts/Cms";
import Logo from "../../assets/logo.svg";
import { useRouter } from "next/router";
import { ROUTES } from "common/constants/paths";
import { removeToken } from "common/auth/tokens";

export interface CmsWrapperProps {
  children: React.ReactNode;
}

const CmsWrapper = ({ children }: CmsWrapperProps) => {
  const router = useRouter();

  const handleRedirectToIndex = () => {
    router.push(ROUTES.HOME);
  };

  const handleLogout = () => {
    removeToken();
    router.push(ROUTES.CMS_LOGIN);
  };

  const handleRedirectToAdd = () => {
    router.push(ROUTES.CMS_ADD);
  };
  const handleonBrowseBtnClick = () => {
    router.push(ROUTES.CMS);
  };

  return (
    <CmsLayout
      navBarProps={{
        logo: <Logo />,
        logoutBtnLabel: "Wyloguj",
        onLogoClick: handleRedirectToIndex,
        onLogoutBtnClick: handleLogout,
      }}
      onAddBtnClick={handleRedirectToAdd}
      onBrowseBtnClick={handleonBrowseBtnClick}
    >
      {children}
    </CmsLayout>
  );
};

export default CmsWrapper;
