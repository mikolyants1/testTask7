import {memo} from 'react';
import Loader from '../load/Loader';
import Error from '../load/Error';
import styles from '../../style/main.module.css';
import { Gql, IAlbums } from '../../types/types';
import AlbumItemCard from './album/AlbumItemCard';
import { useQuery } from '@apollo/client';
import ALBUMS from '../../helpers/query/getAlbum';

interface props {
    id:string
};

function AlbumCard({id}:props):JSX.Element {
 const {data,error,loading} = useQuery<Gql<"albums">>(ALBUMS,{
   variables:{id}
 });
      
  if (loading) return <Loader />;
  if (error) return <Error />;

  console.log(data)
  return (
     <div className={styles.sub}>
       <div className={styles.item}>
          {data&&data.albums.map((i:IAlbums):JSX.Element=>{
            const {albumId,title}:IAlbums = i;
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