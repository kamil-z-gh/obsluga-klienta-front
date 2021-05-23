import type { NextPage } from "next";
import Search, { InitialValues } from "layouts/Search";
import axios from "axios";
import { API_ROUTES } from "common/constants/paths";
import { useState } from "react";

const IndexPage: NextPage = () => {
  const [data, setData] = useState<any>([]);

  const handleSubmit = async (values: InitialValues) => {
    try {
      const data = await axios.post(API_ROUTES.POINTS_SEARCH, values);
      setData(data.data);
    } catch {}
  };

  return (
    <>
      <Search onSubmit={handleSubmit} data={data} />
    </>
  );
};

export default IndexPage;
