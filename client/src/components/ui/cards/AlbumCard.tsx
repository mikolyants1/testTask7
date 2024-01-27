import { useQuery } from '@tanstack/react-query';
import {memo} from 'react'
import getAlbum from '../../helpers/query/getAlbum';
import Loader from '../load/Loader';
import Error from '../load/Error';
import styles from '../../style/main.module.css';
import { IAlbums } from '../../types/types';
import AlbumItemCard from './album/AlbumItemCard';

interface props {
    id:string
};

function AlbumCard({id}:props):JSX.Element {
 const {data,isError,isLoading} = useQuery({
 queryKey:['albums'],queryFn:()=>getAlbum(id)
 });
      
  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  console.log(data)
  return (
     <div className={styles.sub}>
       <div className={styles.item}>
          {data&&data.map((item:IAlbums):JSX.Element=>{
            const {albumId,title}:IAlbums = item;
            return (
              <AlbumItemCard
               key={title}
               albumId={albumId}
               title={title}
              />
          )})}
       </div>
     </div>
  )
}

export default memo(AlbumCard)