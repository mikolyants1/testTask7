import {memo, useState} from 'react'
import styles from '../../../style/main.module.css';
import PhotoCard from '../PhotoCard';
import {motion} from 'framer-motion';

const Show = {
  hide:{
    opacity:0
  },
  init:{
    opacity:1
  }
}
interface props {
    albumId:string,
    title:string,
}

function AlbumItemCard({title,albumId}:props):JSX.Element {
  const [show,setShow] = useState<boolean>(false);
  
  const showPhoto = ():void => {
    setShow((prv:boolean)=>!prv);
    };
  return (
    
    <motion.div variants={Show}
     initial='hide' animate='init'>
      <div className={styles.title}>
        <button onClick={showPhoto}
         className={styles.but}>
          {show ? "-" : "+"}
        </button>
        <div className={styles.name}>
          {title}
        </div>
      </div>
      {show&&<PhotoCard id={albumId} />}
    </motion.div>
    
  )
}

export default memo(AlbumItemCard)