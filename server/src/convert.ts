import { readFileSync } from "fs";

export function Parse<T>(file:string):T {
  const read:string = readFileSync(`${file}.json`,"utf-8");
  return JSON.parse(read);
}