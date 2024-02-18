import { faker } from "@faker-js/faker";
import { Generate, IAlbums, IPhotos, IUsers } from "../types/types.js";

class Generator implements Generate {
    generateUsers(numUsers:number):IUsers[]{
     return [...Array(numUsers)].map(() => ({
        id: faker.string.uuid(),
        name: faker.person.firstName(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
      }));
    };
      
    generateAlbums(numAlbums:number,users:IUsers[]):IAlbums[]{
      return users.flatMap((user:IUsers) =>
        [...Array(numAlbums)].map(() => ({
          albumId: faker.string.uuid(),
          userId: user.id,
          title: faker.lorem.sentence(),
        })));
    };
      
      
    generatePhotos(numPhotos:number,albums:IAlbums[]):IPhotos[]{
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
      })));
    };
}

export default Generator