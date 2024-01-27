import axios, { AxiosResponse } from 'axios'
import { IUsers } from '../../types/types'

async function getUser(id:string):Promise<IUsers> {
 return await axios.get(`http://localhost:3000/users/${id}`)
 .then(({data}:AxiosResponse<IUsers>)=>data);
};

export default getUser