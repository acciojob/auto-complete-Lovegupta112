
import React ,{useState} from "react";
import './../styles/App.css';

const App = () => {

  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
   const [search,setSearch]=useState('');
   const [list,setList]=useState(fruits);
   
    function find(e){
      setSearch(e.target.value);
      setList(fruits.filter((fruit)=>{
            return fruit.includes(e.target.value);
      }))
    }

  return (
    <div>
        {/* Do not remove the main div */}
       <h1>Search item</h1>
       <input type="text" onChange={(e)=>find(e)} value={search} />
       <ul>
       {list.map((fruit,index)=>{
          return <li key={index}>{fruit}</li>
        })}
       </ul>
       
    </div>
  )
}

export default App
