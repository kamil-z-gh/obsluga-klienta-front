import type { NextPage } from "next";
import LoginLayout, { InitialValues } from "layouts/Login";
import Logo from "../../../assets/logo.svg";
import { useSnackbar } from "notistack";
import { saveToken, getToken } from "common/auth/tokens";
import { useRouter } from "next/router";

const IndexPage: NextPage = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const onSubmit = (values: InitialValues) => {
    if (values.email === "admin@admin.pl" && values.password === "qwerty") {
      saveToken();
      router.push("/cms");
    } else {
      enqueueSnackbar("Błąd logowania", {
        variant: "error",
      });
    }
  };
  if (typeof window !== "undefined" && getToken()) {
    router.push("/cms");
  }

  return <LoginLayout logo={<Logo />} onSubmit={onSubmit} />;
};

export default IndexPage;
