import type { NextPage } from "next";
import { getToken } from "common/auth/tokens";
import { useRouter } from "next/router";
import { ROUTES, API_ROUTES } from "common/constants/paths";
import Table, { TableProps } from "components/Table";
import CmsWrapper from "wrappers/CmsWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSnackbar } from "notistack";

const IndexPage: NextPage = () => {
  const [data, setData] = useState<TableProps["rows"]>([]);
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  if (typeof window !== "undefined" && !getToken()) {
    router.push(ROUTES.CMS_LOGIN);
  }

  const fetchTableData = async () => {
    try {
      const data = await axios.get(API_ROUTES.POINTS_GET);
      setData(data.data);
    } catch {}
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  const handleDeleteItem = async (itemId: string) => {
    try {
      await axios.delete(API_ROUTES.POINT_ADD, { data: itemId });
      fetchTableData();
      enqueueSnackbar("Usunięto!", {
        variant: "success",
      });
    } catch {
      enqueueSnackbar("Wystąp[ił błąd!", {
        variant: "error",
      });
    }
  };

  return (
    <>
      <CmsWrapper>
        <Table
          rows={data}
          onEditClick={(id) => router.push(`cms/item/${id}/edit`)}
          onDeleteClick={handleDeleteItem}
        />
      </CmsWrapper>
    </>
  );
};

export default IndexPage;
