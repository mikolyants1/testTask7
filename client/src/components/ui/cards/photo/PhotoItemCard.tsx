import {memo, useContext} from 'react'
import styles from '../../../style/album.module.css';
import compare from '../../../helpers/compare';
import { getPhotos, useAction, useAppSelelctor } from '../../../store/store';
import { IPhotos, context } from '../../../types/types';
import { Context } from '../../../helpers/context';

interface props {
  albumId:string,
  title:string,
  url:string,
  id:string
};

function PhotoItemCard(props:props):JSX.Element {
  const photos:IPhotos[] = useAppSelelctor(getPhotos);
  const {setUrl,setOpen} = useContext<context>(Context);
  const {setFavor,delFavor} = useAction();
  const isFavor:boolean = compare(photos,props.url);
  const className:string = isFavor ? 'like' : 'dis';
  
  const imgHandler = ():void => {
    if (isFavor) delFavor(props.url);
    else setFavor(props);
  };
  
  const modalOpen = ():void => {
    setUrl(props.url);
    setOpen(true);
  };

  return (
    <div className={styles.item}> 
       <div onClick={imgHandler}
        className={styles[className]}>
         &#9733;
       </div>
       <img
        onClick={modalOpen}
        src={props.url}
        alt=''
        />
    </div>
  )
}

export default memo(PhotoItemCard);