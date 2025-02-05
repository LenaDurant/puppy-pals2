import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick() {
    { () => { console.log("puppy id: ", puppy.id) } }
  }

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick= { () => { console.log("puppy id: ", puppy.id) } } key={puppy.id}>{puppy.name}</p>
        );
      })
      }
    </div>
  );
}

export default App