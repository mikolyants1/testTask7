import axios, { AxiosResponse } from 'axios'
import { IAlbums } from '../../types/types'

async function getAlbum(id:string):Promise<IAlbums[]> {
 return await axios.get(`http://localhost:3000/albums/${id}`)
 .then(({data}:AxiosResponse<IAlbums[]>)=>data);
};

export default getAlbum