
import  './App.css';
import List from './List';

const Test = ( { test , checkid , sti , hdel, })=>{


  return (
    <div>
  {(test.length) ?(
   <List 
   test = {test}

   checkid = {checkid}
   sti ={sti}
   hdel = {hdel}
   />
   
  )
:
(<p style={{textAlign:'center',fontSize:'3em',border:'1px solid white'}} >Your list is empty</p>)

}
    </div>
 
  )
}

// {
//   const tested = [{
//     Id:1,
//     Name:'senthil'
//   },
//   {Id:2,
//   Name:'senthil'
// },{
// Id:3,
// Name:'senthil'
// },
//   ]
//   const Id = 2
//   const delww = tested.filter((w)=>w.Id!==Id)
//   console.log(delww)
// }
export default Test