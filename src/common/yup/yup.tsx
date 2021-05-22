import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "To pole jest wymagane",
  },
  string: {
    email: "Podaj prawidłowy email",
  },
});

export default yup;
