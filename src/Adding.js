import React from 'react'
// import './App.js'
import { FaPlus } from 'react-icons/fa6'
import './Adding.css'
const Adding = ({hanch,newinp,setInp}) => {
  return (
    
   <div className='do'  >
    <form className="addfrom"  onSubmit={hanch}>
      <label htmlFor="additem">Add Item</label>
      <input type="text" name="" id="additem"
      placeholder='Add Item'
      autoFocus
      required
      value={newinp}
      onChange={(e)=>setInp( e.target.value) }
      />
      <button aria-label='Add Item' type='submit' className='but'>
      <FaPlus    className='addIcon' 
      />
      </button>

   
    </form>
   </div>
  )
}

export default Adding