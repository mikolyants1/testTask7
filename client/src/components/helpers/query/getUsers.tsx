import axios, { AxiosResponse } from 'axios'
import { IUsers } from '../../types/types'

async function getUsers():Promise<IUsers[]> {
 return await axios.get('http://localhost:3000/users')
 .then(({data}:AxiosResponse<IUsers[]>)=>data);
};

export default getUsers