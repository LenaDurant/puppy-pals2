import { useState } from 'react'
import {puppyList} from './data.js'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  
  
return (
    
      <div className="App"> 
        {puppies.map((puppy) => {
         {()=>{console.log("puppy id: ", puppy.id)}}   
     return (
     <p onClick={()=>{}} key={puppy.id}>{puppy.name}</p>
     );
   })
        }
      </div>
  );
}

export default App