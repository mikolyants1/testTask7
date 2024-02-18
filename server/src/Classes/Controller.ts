import { IAlbums, IPhotos, IUsers} from "../types/types.js";
import { parse } from "../convert.js";

 class Controller {
  private readonly users:IUsers[] = parse<IUsers[]>("users");
  private readonly albums:IAlbums[] = parse<IAlbums[]>("albums");
  private readonly photos:IPhotos[] = parse<IPhotos[]>("photos");

    getUsers():IUsers[]{
     return this.users;
    };
      
    getAlbum(id:string):IAlbums[]{
      const albums:IAlbums[] = this.albums
      .filter((album:IAlbums) => album.userId == id);
      return albums;
    };
      
    getPhotos(id:string):IPhotos[]{
      const albumPhotos:IPhotos[] = this.photos
      .filter((photo:IPhotos) => photo.albumId === id);
      return albumPhotos;
    };  
}

export default Controller;