import { faker } from "@faker-js/faker/locale/ru";
import fs from "fs";
import { IAlbums, IPhotos, IUsers } from "./types.js";

const generateUsers = (numUsers:number):IUsers[] => {
  return [...Array(numUsers)].map(() => ({
    id: faker.string.uuid(),
    name: faker.person.firstName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  }));
};

const generateAlbums = (numAlbums:number, users:IUsers[]):IAlbums[] => {
  return users.flatMap((user:IUsers) =>
    [...Array(numAlbums)].map(() => ({
      albumId: faker.string.uuid(),
      userId: user.id,
      title: faker.lorem.sentence(),
    }))
  );
};


const generatePhotos = (numPhotos:number, albums:IAlbums[]):IPhotos[] => {
  return albums.flatMap((album:IAlbums) =>
    [...Array(numPhotos)].map(() => ({
      albumId: album.albumId,
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      url: faker.image.urlLoremFlickr({
        width: 150,
        height: 150,
        category: "cats",
      }),
    }))
  );
};

const users:IUsers[] = generateUsers(10);
const albums:IAlbums[] = generateAlbums(5, users);
const photos:IPhotos[] = generatePhotos(10, albums);

fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
fs.writeFileSync("albums.json", JSON.stringify(albums, null, 2));
fs.writeFileSync("photos.json", JSON.stringify(photos, null, 2));
