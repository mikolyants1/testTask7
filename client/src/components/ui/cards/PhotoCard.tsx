import {memo} from 'react'
import PHOTOS from '../../helpers/query/getPhotos';
import Loader from '../load/Loader';
import Error from '../load/Error';
import { Gql, IPhotos } from '../../types/types';
import PhotoItemCard from './photo/PhotoItemCard';
import styles from '../../style/album.module.css';
import { useQuery } from '@apollo/client';

interface props {
  id:string
};

function PhotoCard({id}:props):JSX.Element {
 const {data,error,loading} = useQuery<Gql<"photos">>(PHOTOS,{
  variables:{id}
 });

  if (loading) return <Loader />;
  if (error) return <Error />;

  console.log(data)
  return (
    <div className={styles.album}>
      {data&&data.photos.map((item:IPhotos):JSX.Element=>{
        const {id,albumId,title,url}:IPhotos = item;
        return (
           <PhotoItemCard
            key={title}
            albumId={albumId}
            title={title}
            url={url}
            id={id}
             />
        )})}
    </div>
  )
}

export default memo(PhotoCard)