import Header from './Header';
import Adding from './Adding'
import Footer from './Footer';
import Test from './Test';
import Search from './Search';
import React, { useState } from 'react'
function App() {
    const [test,setTest]=useState(
    // [  {
    //     id:1,
    //     check:'true',
    //     Name:'senthil',
    //     Hobbie:'learning coding'
    //   },
    //   {
    //     id:2,
    //     Name:'Naveen',
    //    check:'false',
    //     Hobbie:'Playing Circket'
    //   },
    //   {
    //     id:3,
    //     Name:'pradeep',
    //     Hobbie:'Playing chess',
    //     check:'false'
    //   }
    // ]
    
  JSON.parse(localStorage.getItem("doto_list"))
  )
    
  function checkid(id){
    const inout = test.map((gnam)=>gnam.id===id?{...gnam,check:!gnam.check}:gnam)
    setTest(inout)
   localStorage.setItem("doto_list",JSON.stringify(inout))
   }
   function hdel(id){
   const del = test.filter((dr)=>dr.id!==id)
   setTest(del)
   localStorage.setItem("doto_list",JSON.stringify(del))
   }
   function sti(id){
   const stike  = test.map((vang)=>vang.id===id?{...vang,check:!vang.check}:vang)
   setTest(stike)
     localStorage.setItem("doto_list",JSON.stringify(stike)) 
   }
   const [newinp,setInp]=useState('')
   const hanch = (e)=>{
    e.preventDefault()
    // if(!newinp) return;
  
    add(newinp)
    setInp('')
   
   }


   const add=(Hobbie)=>{
    const id = test.length?test[test.length-1].id+1:1
    const newvalues={id,check:false,Hobbie}
    const addedlist=[...test,newvalues]
    setTest(addedlist)
  
    localStorage.setItem("doto_list",JSON.stringify(addedlist)) 
   }
  
   const [search,setSearch]=useState('')

   return (
   <div>
    <Header  
    title = "To do List"
    />
    <Adding
    newinp={newinp}
    setInp={setInp}
    hanch={hanch}
    />
    <Search 
    search={search}
    setSearch={setSearch}
    />
   <Test 
   test ={test.filter(Hobbie => (Hobbie.Hobbie).toLowerCase().includes(search.toLowerCase()))}
   setTest ={setTest}
   checkid={checkid}
   hdel ={hdel}
  sti ={sti}
   />
   <Footer
   len = {test.length}
   />
    </div>
  );
}

export default App;
