import type { NextPage } from "next";
import { getToken } from "common/auth/tokens";
import { useRouter } from "next/router";
import ROUTES from "common/constants/paths";

import CmsWrapper from "wrappers/CmsWrapper";

const IndexPage: NextPage = () => {
  const router = useRouter();

  if (typeof window !== "undefined" && !getToken()) {
    router.push(ROUTES.CMS_LOGIN);
  }

  return (
    <>
      <CmsWrapper>
        <div>asdsd</div>
      </CmsWrapper>
    </>
  );
};

export default IndexPage;
