import React from 'react'
import  './App.css';
import { FaTrashCan } from "react-icons/fa6";
const List = ({test,checkid,sti,hdel}) => {
  return (
    <div>
    <ul className='dot'>
      {
   
        test.map((get)=>(
          <li className='fulllist'    key={get.id}>
            <label htmlFor="">{get.id}</label>
            <input type='checkbox' checked = {get.check} className='na' onChange={()=>checkid(get.id)} />
            <label  style={(get.check)?{textDecoration:'line-through'}:null} onDoubleClick={()=>sti(get.id)}>{get.Hobbie}</label>
          {/* <label htmlFor="">{get.Name}</label> */}
            <FaTrashCan role='button' tabIndex='0' className='bu'
            aria-label={`Delete ${test.test}`}
            style={{  cursor:'pointer'}} onClick={()=>hdel(get.id)} />
          </li>
        ))
     }
    </ul>
       </div>
  )
}

export default List