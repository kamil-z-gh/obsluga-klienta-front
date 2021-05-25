import type { GetServerSidePropsContext } from "next";
import { FormikHelpers } from "formik";
import { getToken } from "common/auth/tokens";
import { useRouter } from "next/router";
import { ROUTES, API_ROUTES } from "common/constants/paths";
import TouristPointForm, { InitialValues } from "layouts/TouristPointForm";
import CmsWrapper from "wrappers/CmsWrapper";
import axios from "axios";
import { useSnackbar } from "notistack";
import APIUrl from "common/constants/apiUrl";

const IndexPage = (initialValues: InitialValues) => {
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (
    values: InitialValues,
    { resetForm }: FormikHelpers<InitialValues>
  ) => {
    try {
      await axios.put(`${APIUrl}${API_ROUTES.POINT_ADD}`, values);
      enqueueSnackbar("Zaktualizowano!", {
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
          actionBtnLabel="edytuj"
        />
      </CmsWrapper>
    </>
  );
};

export default IndexPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const initialValues = await axios.get(
    `${APIUrl}${API_ROUTES.POINT_ADD}?id=${context.params!.id}`
  );

  return {
    props: initialValues.data,
  };
}
