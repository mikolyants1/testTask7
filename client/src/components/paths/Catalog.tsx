import { useQuery } from '@tanstack/react-query'
import getUsers from '../helpers/query/getUsers'
import Loader from '../ui/load/Loader';
import Error from '../ui/load/Error';
import { IUsers, context } from '../types/types';
import UserCard from '../ui/cards/UserCard';
import styles from '../style/main.module.css'
import { Context } from '../helpers/context';
import { useOutletContext } from 'react-router-dom';

function Catalog():JSX.Element {
  const {setOpen,setUrl} = useOutletContext<context>();
  const {data,isError,isLoading} = useQuery({
  queryKey:['users'],queryFn:getUsers});

  if (isLoading) return <Loader />;
  if(isError) return <Error />;
  return (
    <Context.Provider value={{setUrl,setOpen}}>   
      <main className={styles.main}>
       {data&&data.map((item:IUsers):JSX.Element=>{
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