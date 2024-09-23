import React from 'react'
const Content =()=>{
  function Conte() {
    const namew =['Naveen','Senthil','Pradeep']
    const re = Math.floor(Math.random()*3)
    return namew[re]
  }
function handleclick (name) {
let a  = document.getElementById("show")
a.innerHTML = `hello Mr ${name}`
console.log('hi daa')
  }
  return(
    <div className='content'>
      <p> 
        hello {Conte()} welcome
      </p>
      <button onClick={()=>handleclick('Naveen')}>click</button>
      <div id='show'>

      </div>
      </div>
      )
}

export default Content
