import type { NextApiRequest, NextApiResponse } from "next";
import { InitialValues } from "layouts/TouristPointForm";
import fs from "fs";
import path from "path";

export interface IdataItem extends InitialValues {
  id: string;
}

const pathToFile = path.resolve("./data.json");

// @ts-ignore
const getResources = () => JSON.parse(fs.readFileSync(pathToFile));

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const resources = getResources();

  if (req.method === "DELETE") {
    const updatedResources = resources.filter(
      (item: IdataItem) => item.id !== req.body
    );

    fs.writeFile(
      pathToFile,
      JSON.stringify(updatedResources, null, 2),
      (error) => {
        if (error) {
          return res.status(422).send("Cannot store data in the file!");
        }

        return res.send("Item has been saved!");
      }
    );
  }

  if (req.method === "GET") {
    const resource = resources.filter(
      (item: IdataItem) => item.id === req.query.id
    )[0];

    return res.send(resource);
  }

  if (req.method === "POST") {
    const newResource = {
      ...req.body,
      id: Date.now().toString(),
    };
    resources.unshift(newResource);

    fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
      if (error) {
        return res.status(422).send("Cannot store data in the file!");
      }

      return res.send("Data has been saved!");
    });
  }

  if (req.method === "PUT") {
    const resToEditID = resources.findIndex(
      (item: IdataItem) => item.id === req.body.id
    );

    resources[resToEditID] = req.body;

    fs.writeFile(pathToFile, JSON.stringify(resources, null, 2), (error) => {
      if (error) {
        return res.status(422).send("Cannot store data in the file!");
      }

      return res.send("Data has been saved!");
    });
  }
}
