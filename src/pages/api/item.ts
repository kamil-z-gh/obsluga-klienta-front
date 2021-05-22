import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const pathToFile = path.resolve("./data.json");

// @ts-ignore
const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const resources = getResources();

  const newResource = req.body;
  console.log({ newResource });

  resources.unshift(newResource);
  console.log({ resources });

  fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
    if (error) {
      return res.status(422).send("Cannot store data in the file!");
    }

    return res.send("Data has been saved!");
  });
}
