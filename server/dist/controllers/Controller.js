import Generator from './Generator.js';
const gen = new Generator();
class Controller {
    constructor() {
        this.users = gen.generateUsers(10);
        this.albums = gen.generateAlbums(5);
        this.photos = gen.generatePhotos(10);
    }
    getUser(req, res) {
        const id = req.params.userId;
        const user = this.users
            .find((user) => user.id === id);
        if (user) {
            res.status(200).json(user);
        }
        else {
            res.status(400).send("Пользователь не найден");
        }
    }
    ;
    getUsers(_, res) {
        console.log(this.users);
        res.status(200).json(this.users);
    }
    ;
    getAlbum(req, res) {
        const id = req.params.userId;
        const userAlbums = this.albums
            .filter((album) => album.userId === id);
        res.status(200).json(userAlbums);
    }
    ;
    getPhotos(req, res) {
        const id = req.params.albumId;
        const albumPhotos = this.photos
            .filter((photo) => photo.albumId === id);
        res.status(200).json(albumPhotos);
    }
    ;
}
export default Controller;
