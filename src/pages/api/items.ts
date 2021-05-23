import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const pathToFile = path.resolve("./data.json");

// @ts-ignore
const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const resources = getResources();

  return res.send(resources);
}
