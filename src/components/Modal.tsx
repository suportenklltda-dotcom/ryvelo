import {useEffect,useRef,type ReactNode} from 'react';
import {X} from 'lucide-react';
export default function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:ReactNode}){
 const ref=useRef<HTMLDialogElement>(null);
 const closeRef=useRef(onClose);
 useEffect(()=>{closeRef.current=onClose},[onClose]);
 useEffect(()=>{const el=ref.current!;el.showModal();const cancel=(e:Event)=>{e.preventDefault();closeRef.current()};el.addEventListener('cancel',cancel);return()=>{el.removeEventListener('cancel',cancel);el.close()}},[]);
 return <dialog ref={ref} onClick={e=>{if(e.target===ref.current)onClose()}}><header className="modal-head"><h2>{title}</h2><button className="icon-button" aria-label="Fechar" onClick={onClose}><X size={21}/></button></header>{children}</dialog>
}
