import axios, { AxiosResponse } from 'axios'
import { IPhotos } from '../../types/types'

async function getPhotos(id:string):Promise<IPhotos[]> {
 return await axios.get(`http://localhost:3000/photos/${id}`)
 .then(({data}:AxiosResponse<IPhotos[]>)=>data);
};

export default getPhotos