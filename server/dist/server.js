import express from "express";
import Controller from "./Classes/Controller.js";
import cors from 'cors';
import router from "./router.js";
const PORT = process.env.PORT || 3000;
const app = express();
const control = new Controller();
const { getAlbum, getPhotos } = control;
app.use(express.json());
app.use(cors());
app.use('/users', router);
app.get("/albums/:userId", getAlbum.bind(control));
app.get("/photos/:albumId", getPhotos.bind(control));
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
