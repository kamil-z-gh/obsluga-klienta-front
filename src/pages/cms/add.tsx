import type { NextPage } from "next";
import { getToken } from "common/auth/tokens";
import { useRouter } from "next/router";
import ROUTES from "common/constants/paths";
import TouristPointForm from "layouts/TouristPointForm";
import CmsWrapper from "wrappers/CmsWrapper";

const IndexPage: NextPage = () => {
  const router = useRouter();

  if (typeof window !== "undefined" && !getToken()) {
    router.push(ROUTES.CMS_LOGIN);
  }

  return (
    <>
      <CmsWrapper>
        <TouristPointForm
          onSubmit={(values) => console.log(values)}
          initialValues={{
            name: "",
            localization: "",
            price: undefined,
            rating: undefined,
            phone: undefined,
            description: "",
            openHours: {
              monday: "",
              tuesday: "",
              wednesday: "",
              thursday: "",
              friday: "",
              saturday: "",
              sunday: "",
            },
            imageSRC: "",
          }}
        />
      </CmsWrapper>
    </>
  );
};

export default IndexPage;
