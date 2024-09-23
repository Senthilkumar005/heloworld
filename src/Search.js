import React from 'react'
import './Adding.css'
const Search = ({search,setSearch}) => {
  return (
   <form action="" onSubmit={(e)=>e.preventDefault()} className='sfo'>
    <label htmlFor="forsearch" className='sla'>Search item</label>
    <input type='text' name="" id="" className='sin'
    role='searchbox'
    placeholder='Search item'
    value={search}
    onChange={ (e)=>setSearch(e.target.value)}

    />

   </form>
  )
}

export default Search