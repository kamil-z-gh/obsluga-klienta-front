import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { InitialValues } from "layouts/TouristPointForm";

export interface IdataItem extends InitialValues {
  id: string;
}

const pathToFile = path.resolve("./data.json");

// @ts-ignore
const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const resources = getResources();

  if (req.query.search) {
    const filteredRes = resources.filter((item: IdataItem) =>
      item.name.toLowerCase().includes(req.query.search[0].toLowerCase())
    );

    return res.send(filteredRes);
  }

  return res.send(resources);
}
