import type { NextPage } from "next";
import Button from "@material-ui/core/Button";

import styled from "styled-components";

const Asd = styled.h1`
  font-size: 120px;
  color: ${({ theme }) => theme.palette.primary.main};
`;

const IndexPage: NextPage = () => {
  return (
    <div>
      <Asd>asds</Asd>

      <Button variant="contained" color="primary">
        asdasd
      </Button>
    </div>
  );
};

export default IndexPage;
