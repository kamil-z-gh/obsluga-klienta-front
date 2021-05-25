import type { GetServerSidePropsContext } from "next";
import axios from "axios";
import { API_ROUTES } from "common/constants/paths";
import NavBar from "components/NavBar";
import Logo from "../../assets/logo.svg";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { InitialValues } from "layouts/TouristPointForm";

const IndexPage = (data: InitialValues) => {
  return (
    <>
      <NavBar logo={<Logo />} />
      <Container>
        <Box mt={4} display="flex">
          <img
            src={data.imageSRC}
            alt="Picture of the author"
            width={500}
            height={500}
          />
          <Box ml={4}>
            <Typography>Nazwa: {data.name}</Typography>
            <Typography>Lokalizacja: {data.localization}</Typography>
            <Typography>Cena: {data.price}</Typography>
            <Typography>Ocena: {data.rating}/5</Typography>
            <Typography>Tel.: {data.phone}</Typography>
            <Typography>Opis: {data.description}</Typography>
            <Typography>Godzin otwarcia: </Typography>
            <Typography>Poniedziałek: {data.openHours.monday}</Typography>
            <Typography>Wtorek: {data.openHours.tuesday}</Typography>
            <Typography>Środa: {data.openHours.wednesday}</Typography>
            <Typography>Czwartek: {data.openHours.thursday}</Typography>
            <Typography>Piątek: {data.openHours.friday}</Typography>
            <Typography>Sobota: {data.openHours.saturday}</Typography>
            <Typography>Niedziela: {data.openHours.sunday}</Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default IndexPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const initialValues = await axios.get(
    `https://biuro-obslugi-klienta.vercel.app/${API_ROUTES.POINT_ADD}?id=${
      context.params!.id
    }`
  );

  return {
    props: initialValues.data,
  };
}
