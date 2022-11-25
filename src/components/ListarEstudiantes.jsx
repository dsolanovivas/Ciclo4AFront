import React, { useState, useEffect } from 'react'
import TextField from "@mui/material/TextField"
import axios from "axios"
import Table from "react-bootstrap/Table"
import { FilaEstudiante } from "./FilaEstudiante"
import { EditarEstudiante } from "./EditarEstudiante"

export const ListarEstudiantes = () => {

  const [showModal, setShowModal] = useState(false);
  const [estudiantes, setEstudiantes] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect( ()=> {

    if (inputText !== "")
    {
      axios
      .get("http://127.0.0.1:4000/APIRESTCICLO4A/busqueda-estudiante/"+inputText)
      .then((res) =>{
        setEstudiantes(res.data);
      })
      .catch((error) =>{
        alert("Ocurrio un error con la busqueda");
        console.log(error);
      });
    }
    else{

      axios
      .get("http://127.0.0.1:4000/APIRESTCICLO4A/listar-estudiantes")
      .then((res) =>{
        setEstudiantes(res.data);
      })
      .catch((error)=>{
        alert("Ocurrio un Error listando los estudiantes");
        console.log(error);
      });
    }

    
  } , [inputText]);

  let inputHandler = (e) =>{
    console.log(e.key)
    
    if (e.key === "Enter")
    {
      let lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    }
    
  }

  function dataTable(){
    return estudiantes.map((res) => {
      return <FilaEstudiante handleOpenModal={handleOpen} obj={res}></FilaEstudiante>
    })
  }

  function handleOpen(){
    setShowModal(true)
  }
  function handleClose(){
    setShowModal(false)
  }

  return (
    <div className="table-wrapper">
      <div className="search">
        <TextField 
          id="outlined-basic" 
          label="Search" 
          variant="outlined"
          //onChange={inputHandler}
          onKeyDown={inputHandler}
          fullWidth />
      </div>
      <br/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Cedula</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>{dataTable()}</tbody>
      </Table>
      {showModal && <EditarEstudiante handleC={handleClose}/> }
    </div>
  )
}
