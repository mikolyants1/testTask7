import styles from '../../style/main.module.css'
import {memo, useState} from 'react';
import AlbumCard from './AlbumCard';

interface props {
    id:string,
    name:string,
    email:string,
    username:string
};

function UserCard({id,name,username}:props):JSX.Element {
  const [show,setShow] = useState<boolean>(false);

  const showPhoto = ():void => {
    setShow((prv:boolean)=>!prv);
  };

  return (
      <div className={styles.item}>
        <div className={styles.title}>
           <button onClick={showPhoto}
            className={styles.but}>
              {show ? "-" : "+"}
           </button>
           <div className={styles.name}>
             {name} {username}
           </div>
        </div>
        {show&&<AlbumCard id={id} />}
      </div>
  )
}

export default memo(UserCard);