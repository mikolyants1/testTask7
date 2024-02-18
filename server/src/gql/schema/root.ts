import Controller from "../../Classes/Controller.js";
import { IAlbums, IPhotos, IRoot, IUsers, Id } from "../../types/types.js";

const control:Controller = new Controller();

class Root implements IRoot {
  users():IUsers[]{
    return control.getUsers();
  };

  albums({id}:Id):IAlbums[]{
    return control.getAlbum(id);
  };

  photos({id}:Id):IPhotos[]{
    return control.getPhotos(id);
  };
}

export const root = new Root();