import { promises as fs } from "fs";

export const readFile = async (filePath: string) => {
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch (err) {
    console.log(err);
  }
};
