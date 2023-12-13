import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const apiUrl ='https://localhost:44307/api/Clients';

  useEffect(() => {    
       fetch(apiUrl) // 
      .then((response) => response.json()) 
      .then(({result}) => {setData(result)});       
    },[])
  
  return (
    <> 
    <ul>      
      {data.map((client) => (<li key={client.id}> {client.name}</li>))}
    </ul>
    </>
  )
}

export default App
