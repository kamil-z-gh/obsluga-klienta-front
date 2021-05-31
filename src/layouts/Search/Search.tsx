import { StyledWrapper } from "./Search.styled";
import Box from "@material-ui/core/Box";
import { Formik, Form } from "formik";
import TextField from "components/formik/TextField";
import yup from "common/yup";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Table, { TableProps } from "components/Table";
import Container from "@material-ui/core/Container";
import NavBar from "components/NavBar";
import Logo from "../../assets/logo.svg";

export interface InitialValues {
  search: string;
}

const loginFormValidationSchema = yup.object({
  search: yup.string(),
});

const initialValues: InitialValues = {
  search: "",
};

export interface SearchProps {
  onSubmit: (values: InitialValues) => void;
  data: TableProps["rows"];
}
/**
 * @callback onSubmit
 * @param {InitialValues} values
 * @returns {void}
 */
/**
 * Komponent renderujący głowny widok wyszukiwania punktów turystycznych widziany przez klienta
 * @param {onSubmit}  onSubmit - funkcja uruchamiana podczas submitowania formularza do wyszukiwania
 * @param {TableProps} data - dane przeznaczone do wyświetlenia w tablicy
 * */
const Search = ({ onSubmit, data }: SearchProps) => {
  return (
    <>
      <NavBar logo={<Logo />} />
      <StyledWrapper>
        <Container>
          <Box width="100%" display="flex" justifyContent="center" mb={4}>
            <Box width="100%" maxWidth={700} p={2} boxShadow={2}>
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={loginFormValidationSchema}
              >
                <Form>
                  <Box display="flex" justifyContent="space-between">
                    <TextField name="search" label="Szukaj..." fullWidth />
                    <Box ml={3} display="flex" alignItems="flex-end">
                      <Button type="submit" variant="contained" color="primary">
                        <SearchIcon />
                      </Button>
                    </Box>
                  </Box>
                </Form>
              </Formik>
            </Box>
          </Box>
          <Table rows={data} />
        </Container>
      </StyledWrapper>
    </>
  );
};

export default Search;
