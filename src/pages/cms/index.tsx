import type { NextPage } from "next";
import { getToken, removeToken } from "common/auth/tokens";
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

const IndexPage: NextPage = () => {
  const router = useRouter();

  if (typeof window !== "undefined" && !getToken()) {
    router.push("/cms/login");
  }

  const handleLogout = () => {
    removeToken();
    router.push("/cms/login");
  };

  return (
    <div>
      CMS
      <Button variant="contained" color="primary" onClick={handleLogout}>
        wyloguj
      </Button>
    </div>
  );
};

export default IndexPage;
