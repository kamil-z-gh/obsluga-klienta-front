import * as yup from "yup";
/** globalne ustawienia walidacji pól formularzy: required oraz email */
yup.setLocale({
  mixed: {
    required: "To pole jest wymagane",
  },
  string: {
    email: "Podaj prawidłowy email",
  },
});

export default yup;
