import TextField, { TextFieldProps } from "components/formik/TextField";
import Box, { BoxProps } from "@material-ui/core/Box";

interface DayHoursTextFieldProps extends TextFieldProps {
  mt?: BoxProps["mt"];
  mb?: BoxProps["mb"];
  ml?: BoxProps["ml"];
  mr?: BoxProps["mr"];
}
const DayHoursTextField = ({
  mt = 1,
  mb = 1,
  ml,
  mr,
  ...rest
}: DayHoursTextFieldProps) => {
  return (
    <Box mt={mt} mb={mb} ml={ml} mr={mr}>
      <TextField {...rest} />
    </Box>
  );
};

export default DayHoursTextField;
