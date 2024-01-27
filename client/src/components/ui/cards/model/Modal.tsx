import {memo} from 'react'
import styles from '../../../style/modal.module.css';

interface props {
    open:boolean,
    close:()=>void,
    url:string
}
function Modal({open,close,url}:props):JSX.Element {
 const classWrap:string = open ? 'open' : "close";
 const classImg:string = open ? 'img' : 'closeImg';
 const classHead:string = open ? 'header' : 'closeHead'
  return (
    <>
    <div className={styles[classWrap]} />
      <div className={styles[classHead]}>
        <div onClick={close}
         className={styles.but}>
            +
        </div>
      </div>
      <img
       className={styles[classImg]}
       src={url}
       alt="" />
    </>
  )
}

export default memo(Modal)