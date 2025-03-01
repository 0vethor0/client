import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {

const [nombre, setNombre] = useState("");    
const [apellido, setApellido] = useState("");    
const [edad, setEdad] = useState(0);    
const [correo, setCorreo] = useState("");    
const [stauts, setStatus] = useState(""); 
const [personasList, setPersonasList] = useState([]);

const mostrarDatos=()=>{
      Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      correo: correo,
      status: stauts
      }).then(()=>{
      alert("Datos insertados");
      });
}

const getDatos=()=>{
      Axios.get("http://localhost:3001/personas").then((response)=>{
      setPersonasList(response.data);
      });
}

return (
<div className="App">
      <div className="datos">
            <label>Nombre:<input 
                  onChange={(event) =>{setNombre(event.target.value)}}
            type="text"/></label><br/>
            <label>Apellido:<input 
                  onChange={(event) =>{setApellido(event.target.value)}}
            type="text"/></label><br/>
            <label>Edad:<input 
                  onChange={(event)=> {setEdad(event.target.value)}}
            type="number"/></label><br/>
            <label>Correo: <input 
                  onChange={(event)=> {setCorreo(event.target.value)}}
            type="email"/></label><br/>
            <label>Status: <input 
                  onChange={(event)=> {setStatus(event.target.value)}}
            type="text"/></label><br/>
            <button onClick={mostrarDatos}>Registrar </button>
      </div>
      <div className="lista">
            <button onClick={getDatos}>Mostrar Lista</button>
            {
            personasList.map((val, key) => {
                  return <div className="listar"> {val.nombre}</div>
                        
            })
            }
      </div>
</div>
);
}

export default App;
