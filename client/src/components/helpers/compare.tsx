import { IPhotos} from "../types/types";

export default (albums:IPhotos[],url:string):boolean => {
  return albums.some((i:IPhotos)=>i.url == url);
}