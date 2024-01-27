import express,{Express} from "express";
import Controller from "./Classes/Controller.js";
import cors from 'cors'
import router from "./router.js";

const PORT:string|number = process.env.PORT || 3000;

const app:Express = express();

const control:Controller = new Controller();

const {getAlbum,getPhotos}:Controller = control;

app.use(express.json());

app.use(cors());

app.use('/users',router);

app.get("/albums/:userId",getAlbum.bind(control));

app.get("/photos/:albumId",getPhotos.bind(control));

app.listen(PORT,():void => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
