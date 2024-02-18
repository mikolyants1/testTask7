import Generator from "./Classes/Generator.js";
import fs from "fs";
import { IAlbums, IPhotos, IUsers } from "./types/types.js";

const gen:Generator = new Generator();

const users:IUsers[] = gen.generateUsers(10);
const albums:IAlbums[] = gen.generateAlbums(5, users);
const photos:IPhotos[] = gen.generatePhotos(10, albums);

fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
fs.writeFileSync("albums.json", JSON.stringify(albums, null, 2));
fs.writeFileSync("photos.json", JSON.stringify(photos, null, 2));
