
import Loader from '../ui/load/Loader';
import Error from '../ui/load/Error';
import { Gql, IUsers, context } from '../types/types';
import UserCard from '../ui/cards/UserCard';
import styles from '../style/main.module.css'
import { Context } from '../helpers/context';
import { useOutletContext } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import USERS from '../helpers/query/getUsers';

function Catalog():JSX.Element {
  const {setOpen,setUrl} = useOutletContext<context>();
  const {data,error,loading} = useQuery<Gql<"users">>(USERS);

  if (loading) return <Loader />;
  if(error) return <Error />;
  console.log(data)
  return (
    <Context.Provider value={{setUrl,setOpen}}>   
      <main className={styles.main}>
       {data&&data.users.map((item:IUsers):JSX.Element=>{
        const {username,id,name,email}:IUsers = item;
        return (
          <UserCard
           key={email}
           id={id}
           name={name}
           username={username}
           email={email}
          />
        )})}
      </main>
    </Context.Provider>
  )
}

export default Catalog