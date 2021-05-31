import TextField, {
  TextFieldProps as MuiTextFieldProps,
} from "@material-ui/core/TextField";
import { useField } from "formik";

export interface TextFieldProps
  extends Omit<
    MuiTextFieldProps,
    "name" | "value" | "onChange" | "onBlur" | "error"
  > {
  name: string;
}
/**
 * Komponent zwracający input tekstowy używany w formularzu
 * @extends {MuiTextFieldProps}
 * @param {string}  name - atrybut name dla HTML tagu inputa
 */
const FormikTextField = ({ name, helperText, ...rest }: TextFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <TextField
      name={field.name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
      error={meta.touched && !!meta.error}
      helperText={(meta.touched && meta.error) || helperText}
      {...rest}
    />
  );
};

export default FormikTextField;
