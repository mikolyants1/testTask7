import { useQuery } from '@tanstack/react-query'
import {memo} from 'react'
import getPhotos from '../../helpers/query/getPhotos';
import Loader from '../load/Loader';
import Error from '../load/Error';
import { IPhotos } from '../../types/types';
import PhotoItemCard from './photo/PhotoItemCard';
import styles from '../../style/album.module.css';

interface props {
    id:string
}
function PhotoCard({id}:props):JSX.Element {
 const {data,isError,isLoading} = useQuery<IPhotos[]>({
  queryKey:['photos'],queryFn:()=>getPhotos(id)});

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  console.log(data)
  return (
    <div className={styles.album}>
      {data&&data.map((item:IPhotos):JSX.Element=>{
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