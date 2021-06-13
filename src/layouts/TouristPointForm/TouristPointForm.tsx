import { Formik, FormikHelpers, Form } from "formik";
import yup from "common/yup";
import TextField from "components/formik/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DayHoursTextField from "./DayHoursTextField";

export interface IWeekOpenHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface InitialValues {
  name: string;
  localization: string;
  price: number | "";
  rating: number | "";
  phone: number | "";
  description: string;
  openHours: IWeekOpenHours;
  imageSRC: string;
}

const loginFormValidationSchema = yup.object({
  name: yup.string().required(),
  localization: yup.string().required(),
  price: yup.number().required(),
  rating: yup.number().max(5).required(),
  phone: yup.number().required(),
  description: yup.string().required(),
  openHours: yup.object({
    monday: yup.string().required(),
    tuesday: yup.string().required(),
    wednesday: yup.string().required(),
    thursday: yup.string().required(),
    friday: yup.string().required(),
    saturday: yup.string().required(),
    sunday: yup.string().required(),
  }),
  imageSRC: yup.string().required(),
});

export interface TouristPointFormProps {
  onSubmit: (
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) => void;
  initialValues: InitialValues;
  actionBtnLabel?: string;
}

/**
 * @typedef {object} IWeekOpenHours - struktura danych formularza
 * @property {string} monday - godziny otwarcia w poniedziałek
 * @property {string} tuesday - godziny otwarcia we wtorek
 * @property {string} wednesday - godziny otwarcia w środę
 * @property {string} thursday - godziny otwarcia w czwartek
 * @property {string} friday - godziny otwarcia w piątek
 * @property {string} saturday - godziny otwarcia w sobotę
 * @property {string} sunday - godziny otwarcia w niedzielę
 */

/**
 * @typedef {object} InitialValues - struktura danych formularza
 * @property {string} name - nazwa punktu
 * @property {string} localization - lokalizacja punktu
 * @property {number | ""} price -cena wstępu na dany obiekt
 * @property {number | ""} rating - ocena obiektu
 * @property {number | ""} phone - telefon kontaktowy do punktu turystycznego
 * @property {string} description - opis punktu turystycznego
 * @property {IWeekOpenHours} openHours - obiekt zawierający godziny wstępu na dany obiekt turystyczny
 * @property {string} imageSRC - link do poglądowego zdjęcia
 */

/**
 * @callback onSubmit
 * @param {InitialValues} values - struktura danych uzupełnionych w formularzu
 * @param {FormikHelpers<InitialValues>} actions - obiekt akcji z biblioteki Formik
 * @returns {void}
 */

/**
 * Komponent renderujący formularz dodawania/edycji punktu turystycznego
 * @param {onSubmit}  onSubmit - funkcja uruchamiana podczas obsługi danych z formularza
 * @param {TableProps} initialValues - dane uzupełnione przez użytkownika w formularzu
 * @param {string} actionBtnLabel - napis wyświetlany na przycisku obsługującym formularz
 * */
const TouristPointForm = ({
  onSubmit,
  initialValues,
  actionBtnLabel = "Dodaj",
}: TouristPointFormProps) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={loginFormValidationSchema}
    >
      <Form>
        <Box mb={4}>
          <TextField type="text" name="name" label="Nazwa" fullWidth />
          <TextField
            type="text"
            name="localization"
            label="Lokalizacja"
            fullWidth
          />
          <TextField type="number" name="price" label="Cena" fullWidth />
          <TextField type="number" name="rating" label="Ocena" fullWidth />
          <TextField type="number" name="phone" label="Tel" fullWidth />
          <TextField type="text" name="description" label="Opis" fullWidth />
          <TextField
            type="text"
            name="imageSRC"
            label="Link do zdjęcia"
            fullWidth
          />

          <Box mb={4} mt={2}>
            <Typography color="textSecondary">Godziny otwarcia:</Typography>
            <DayHoursTextField
              type="string"
              name="openHours.monday"
              label="Poniedziałek"
            />
            <DayHoursTextField
              type="string"
              name="openHours.tuesday"
              label="Wtorek"
            />
            <DayHoursTextField
              type="string"
              name="openHours.wednesday"
              label="Środa"
            />
            <DayHoursTextField
              type="string"
              name="openHours.thursday"
              label="Czwartek"
            />
            <DayHoursTextField
              type="string"
              name="openHours.friday"
              label="Piątek"
            />
            <DayHoursTextField
              type="string"
              name="openHours.saturday"
              label="Sobota"
            />
            <DayHoursTextField
              type="string"
              name="openHours.sunday"
              label="Niedziela"
            />
          </Box>
        </Box>

        <Box mb={4} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" type="submit">
            {actionBtnLabel}
          </Button>
        </Box>
      </Form>
    </Formik>
  );
};

export default TouristPointForm;
