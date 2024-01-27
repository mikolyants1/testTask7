import { useOutletContext } from 'react-router-dom';
import { Context } from '../helpers/context';
import { getPhotos, useAppSelelctor } from '../store/store';
import styles from '../style/main.module.css';
import { IPhotos, context } from '../types/types';
import PhotoItemCard from '../ui/cards/photo/PhotoItemCard';

function Favorite():JSX.Element {
  const photos:IPhotos[] = useAppSelelctor(getPhotos);
  const {setOpen,setUrl} = useOutletContext<context>();
  return (
   <Context.Provider value={{setOpen,setUrl}}>
    <div className={styles.upmain}>
       {photos.map(({url,albumId,title,id}:IPhotos):JSX.Element=>(
        <div className={styles.album}>
          <PhotoItemCard
           key={url}
           url={url}
           title={title}
           id={id}
           albumId={albumId}
           />
        </div>
       ))}
    </div>
  </Context.Provider>
  )
}

export default Favorite