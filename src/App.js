import './App.css';
import {useState} from 'react';

function App() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState(0);
  const [correo, setCorreo] = useState(''); 
  return (
    <div className="App">
        <div className="datos">
              <label>Nombre:<input 
                    onChange={(event) => {setNombre(event.target.value)}}
                    type="text"/>
              </label><br/>
              <label>Apellido:<input 
                    onChange={(event) => {setApellido(event.target.value)}}
              type="text"/></label><br/>
              <label>Edad:<input 
                    onChange={(event) => {setEdad(event.target.value)}}
              type="number"/></label><br/>
              <label>Correo: <input
                    onChange={(event) => {setCorreo(event.target.value)}}
              type="email"/></label><br/>
              <button>Registrar </button>
        </div>
    </div>
  );
}

export default App;
