import { Request, Response } from "express";
import { EndPoints, IAlbums, IPhotos, IUsers } from "../types.js";
import { Parse } from "../convert.js";

 class Controller implements EndPoints {
  private readonly users:IUsers[] = Parse<IUsers[]>("users");
  private readonly albums:IAlbums[] = Parse<IAlbums[]>("albums");
  private readonly photos:IPhotos[] = Parse<IPhotos[]>("photos");

   getUser(req:Request, res:Response):void{
     const id:string = req.params.userId;
     const user:IUsers|undefined = this.users
     .find((user:IUsers) => user.id === id);
     if (!user){
      res.status(400).json({
        message:'пользователь не найден'
      })
      return;
     }
     res.status(200).json(user);
    };
    getUsers(_:Request,res:Response):void{
      console.log(this.users)
      res.status(200).json(this.users);
    };
      
    getAlbum(req:Request, res:Response):void{
      const id:string = req.params.userId;
      const userAlbums:IAlbums[] = this.albums
      .filter((album:IAlbums) => album.userId === id);
      res.status(200).json(userAlbums);
    };
      
    getPhotos(req:Request, res:Response):void{
      const id:string = req.params.albumId;
      const albumPhotos:IPhotos[] = this.photos
      .filter((photo:IPhotos) => photo.albumId === id);
      res.status(200).json(albumPhotos);
    };  
}

export default Controller;