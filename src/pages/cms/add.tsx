import type { NextPage } from "next";
import { FormikHelpers } from "formik";
import { getToken } from "common/auth/tokens";
import { useRouter } from "next/router";
import { ROUTES, API_ROUTES } from "common/constants/paths";
import TouristPointForm, { InitialValues } from "layouts/TouristPointForm";
import CmsWrapper from "wrappers/CmsWrapper";
import axios from "axios";
import { useSnackbar } from "notistack";

const initialValues: InitialValues = {
  name: "",
  localization: "",
  price: "",
  rating: "",
  phone: "",
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
};

const IndexPage: NextPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    values: InitialValues,
    { resetForm }: FormikHelpers<InitialValues>
  ) => {
    try {
      await axios.post(API_ROUTES.POINT_ADD, values);
      enqueueSnackbar("Dodano!", {
        variant: "success",
      });
      resetForm();
    } catch (err) {
      enqueueSnackbar("Wystąpił błąd!", {
        variant: "error",
      });
    }
  };

  const router = useRouter();

  if (typeof window !== "undefined" && !getToken()) {
    router.push(ROUTES.CMS_LOGIN);
  }

  return (
    <>
      <CmsWrapper>
        <TouristPointForm
          onSubmit={handleSubmit}
          initialValues={initialValues}
        />
      </CmsWrapper>
    </>
  );
};

export default IndexPage;
