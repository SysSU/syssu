import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

const DataServer = async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Find the absolute path of the json directory
  const jsonDataDir = path.join(process.cwd(), 'data/json');
  const { filePath } = req.query;

  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDataDir + `/${filePath}.json`,
    'utf8'
  );
  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents));
};

export default DataServer;
