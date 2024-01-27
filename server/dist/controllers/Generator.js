import { faker } from "@faker-js/faker";
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
    generateAlbums(numAlbums) {
        const users = this.generateUsers(10);
        return users.flatMap((user) => [...Array(numAlbums)].map(() => ({
            albumId: faker.string.uuid(),
            userId: user.id,
            title: faker.lorem.sentence(),
        })));
    }
    ;
    generatePhotos(numPhotos) {
        const albums = this.generateAlbums(5);
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
}
export default Generator;
