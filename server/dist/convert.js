import { readFileSync } from "fs";
export function Parse(file) {
    const read = readFileSync(`${file}.json`, "utf-8");
    return JSON.parse(read);
}
