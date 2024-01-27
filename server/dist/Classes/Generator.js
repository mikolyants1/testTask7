import { faker } from "@faker-js/faker";
import { writeFileSync } from "fs";
class Generator {
    generateUsers(numUsers) {
        return [...Array(numUsers)].map(() => ({
            id: faker.string.uuid(),
            name: faker.person.firstName(),
            username: faker.internet.userName(),
            email: faker.internet.email(),
        }));
    }
    ;
    generateAlbums(numAlbums, users) {
        return users.flatMap((user) => [...Array(numAlbums)].map(() => ({
            albumId: faker.string.uuid(),
            userId: user.id,
            title: faker.lorem.sentence(),
        })));
    }
    ;
    generatePhotos(numPhotos, albums) {
        return albums.flatMap((album) => [...Array(numPhotos)].map(() => ({
            albumId: album.albumId,
            id: faker.string.uuid(),
            title: faker.lorem.sentence(),
            url: faker.image.urlLoremFlickr({
                width: 150,
                height: 150,
                category: "cats",
            }),
        })));
    }
    ;
    render() {
        const users = this.generateUsers(10);
        const albums = this.generateAlbums(5, users);
        const photos = this.generatePhotos(10, albums);
        writeFileSync("users.json", JSON.stringify(users, null, 2));
        writeFileSync("albums.json", JSON.stringify(albums, null, 2));
        writeFileSync("photos.json", JSON.stringify(photos, null, 2));
    }
}
export default Generator;
