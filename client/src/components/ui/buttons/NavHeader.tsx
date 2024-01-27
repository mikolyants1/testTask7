import { NavLink, Outlet } from 'react-router-dom';
import styles from '../../style/nav.module.css';
import { useCallback, useState } from 'react';
import Modal from '../cards/model/Modal';

interface active {
  isActive:boolean
};

function NavHeader():JSX.Element {
  const [open,setOpen] = useState<boolean>(false);
  const [url,setUrl] = useState<string>("");
  
  const close = useCallback(():void => {
    setOpen(false);
  },[]);
  
  return (
    <>
      <Modal
        open={open}
        close={close}
        url={url}
       />
      <nav className={styles.header}>
        <NavLink to='/'
         className={({isActive}:active)=>(
          styles[isActive ? "active" : "pend"]
         )}>
          Каталог
        </NavLink>
        <NavLink to='/favorite'
         className={({isActive}:active)=>(
          styles[isActive ? "active" : "pend"]
         )}>
           Избранное
        </NavLink>
      </nav>
      <Outlet
       context={{
        setOpen,
        setUrl
       }}
      />
    </>
  )
}

export default NavHeader