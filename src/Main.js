// import React, { useState } from 'react'

const Main = ({}) => {
//   const [items, setitems] = useState([
//     {
//       id:1,
//       checked:true,
//       work:'learning coding'
//     },
//     {
//       id:2,
//       checked:true,
//       work:'Playiing Circket'
//     },
//     {
//       id:1,
//       checked:true,
//       work:'Watching Movies'
//     }
//   ])
  return (
    <div>
      <ul>
        {
          items.map((geting)=>(
            <li>
              <input type='checkbox' checked ={geting.checked} />
              <label >{geting.work}</label>
              <button>delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Main