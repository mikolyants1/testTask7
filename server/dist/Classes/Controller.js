import { Parse } from "../convert.js";
class Controller {
    constructor() {
        this.users = Parse("users");
        this.albums = Parse("albums");
        this.photos = Parse("photos");
    }
    getUser(req, res) {
        const id = req.params.userId;
        const user = this.users
            .find((user) => user.id === id);
        if (!user) {
            res.status(400).json({
                message: 'пользователь не найден'
            });
            return;
        }
        res.status(200).json(user);
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
