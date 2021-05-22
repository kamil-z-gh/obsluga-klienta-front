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
