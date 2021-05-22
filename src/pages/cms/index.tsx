import type { NextPage } from "next";
import { getToken } from "common/auth/tokens";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const router = useRouter();

  if (typeof window !== "undefined" && !getToken()) {
    router.push("/cms/login");
  }

  return <div>CMS</div>;
};

export default IndexPage;
