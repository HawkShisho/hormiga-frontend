import axios from "axios"
import {useState} from "react"


function App() {
  const [datos,setDatos] = useState([])
  const handleClick = async () => {
     const {data} = await axios.get("http://localhost:3000/")
    setDatos(data)
  }
  const handleDelete = async () => {
    const data = await axios.post("http://localhost:3000/",{
      id: 2
    })

  }


  return (
    <div>
      <h1 className="text-center text-3xl">Hola mundo</h1>
      <div className="container bg-red-300 mx-auto">
        <div className="">
          <button className="bg-sky-700 text-white rounded p-2" onClick={handleClick}>Traer datos</button>
        {datos.map((dato) => (
          <p key={dato.tbh_id}>{dato.tbh_username}</p>
        ))}
        <div>
          <button onClick={handleDelete}>Eliminar</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
