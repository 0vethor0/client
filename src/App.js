import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [nombre, setNombre] = useState("");    
const [apellido, setApellido] = useState("");    
const [edad, setEdad] = useState(0);    
const [correo, setCorreo] = useState("");    
const [stauts, setStatus] = useState(""); 
const [editar, setEditar] = useState(false);// para saber si se esta editando o no
const [id, setId] = useState(0);
const [personasList, setPersonasList] = useState([]);

const mostrarDatos=()=>{//funcion para insertar datos
      Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      correo: correo,
      status: stauts
      }).then(()=>{
      alert("Datos insertados");
      LimpiarCampos();
      });
}
const update=()=>{
      Axios.put("http://localhost:3001/actualizar", {
      id: id,
      nombre: nombre,
      apellido: apellido,
      edad: edad,
      correo: correo,
      status: stauts
      }).then(()=>{
      getDatos();
      alert("Datos actualizados");
      LimpiarCampos();
      });
}

const LimpiarCampos=(id)=>{
      setNombre("");
      setApellido("");
      setEdad("");
      setCorreo("");
      setStatus("");
      setId("");
      setEditar(false);
}

const editarDatos = (valor)=>{
      setEditar(true);
      setNombre(valor.nombre);
      setApellido(valor.apellido);
      setEdad(valor.edad);
      setCorreo(valor.correo);
      setStatus(valor.status);
      setId(valor.id);
}//funcion para editar

const getDatos=()=>{

      Axios.get('http://localhost:3001/personas')
            .then(response => {
            setPersonasList(response.data);
            //console.log(response.data);
      })
      .catch(error => {
      console.error('Error al realizar la solicitud:', error);
      });

      //Axios.get("http://localhost:3001/personas")
      //.then((response)=>{
      //setPersonasList(response.data);
      //});
}

getDatos();

return (

<div className="container"> 

      <div className="card text-center">
      <div className="card-header">
            Gestion de esclavos
      </div>
            <div className="card-body">
                  <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Nombre:</span>
                        <input type="text" 
                              onChange={(event) =>{setNombre(event.target.value)}}
                              className="form-control" value={nombre} placeholder="Ingrese un Nombre" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Apellido:</span>
                        <input type="text" 
                              onChange={(event) =>{setApellido(event.target.value)}}
                              className="form-control" value={apellido} 
                              placeholder="Ingrese un apellido" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Edad</span>
                        <input type="number" 
                              onChange={(event)=> {setEdad(event.target.value)}}
                              className="form-control" value={edad} 
                              placeholder="Ingrese su edad" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Correo:</span>
                        <input type="email" 
                              onChange={(event)=> {setCorreo(event.target.value)}}
                              className="form-control" value={correo}
                              placeholder="Ingrese su E-mail" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                  <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Carrera:</span>
                        <input type="text" 
                              onChange={(event)=> {setStatus(event.target.value)}}
                              className="form-control" value={stauts}
                              placeholder="Ingrese la carrera que cursa" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>

            </div>
      <div className="card-footer text-body-secondary">              
            
            {
                  editar?
                  <div>
                  <button className= 'btn btn-warning m-2'  onClick={update}>Realizar Modifiacion de Datos</button>
                  <button className= 'btn btn-info m-2' onClick={LimpiarCampos}>Cancelar</button>
                  </div>
                  :<button className= 'btn btn-success' onClick={mostrarDatos}>Registrar</button>
            }
      </div>
            <div className='card-body'>
                  <table className="table table-hover">
                        <thead>
                              <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Edad</th>
                                    <th scope="col">Correo</th>
                                    <th scope="col">Carrera</th>
                                    <th scope="col">Acciones</th>
                              </tr>
                        </thead>
                        <tbody>
                              {
                              personasList.map((val, key) => {
                              return <tr key={val.id}>
                                          <th>{val.id}</th>
                                          <td>{val.nombre}</td>
                                          <td>{val.apellido}</td>
                                          <td>{val.edad}</td>
                                          <td>{val.correo}</td>
                                          <td>{val.status}</td>
                                          <td>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                <button type='button'
                                                      onClick={()=>{
                                                            editarDatos(val);
                                                      }}
                                                className='btn btn-warning'>Editar</button>
                                                <button type='button'

                                                className='btn btn-danger'>Eliminar</button>
                                                </div>
                                          </td>
                                    </tr>
                              })
                              }
                              
                        </tbody>
                  </table>
            </div>
            
</div>
</div>
);
}

export default App;
