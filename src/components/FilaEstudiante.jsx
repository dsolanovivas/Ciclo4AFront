import axios from 'axios'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { EditarEstudiante } from "./EditarEstudiante"

export const FilaEstudiante = (props) => {

  function borrarEstudiante(){
    // Aqui se debe implementar el llamado a eliminar estudiante en API REST
    axios
      .delete("http://127.0.0.1:4000/APIRESTCICLO4A/borrar-estudiante/"+ props.obj._id)
      .then((res)=>{
        alert("Estudiante eliminado exitosamente");
      })
      .catch((error)=>{
        alert("Problemas al eliminar el estudiante");
        console.log(error);
      });

    props.RData();
  }

  function editarEstudiante(e){
    e.preventDefault();
    props.handleOpenModal(props.obj);
  }

  return (
    <>
    <tr>
        <td>{props.obj.nombre}</td>
        <td>{props.obj.email}</td>
        <td>{props.obj.cedula}</td>
        <td>
            <Link className="edit-link" onClick={editarEstudiante} >Editar</Link>
            &nbsp;
            <Button onClick={borrarEstudiante} size="sm" variant="danger">Borrar</Button>
        </td>
    </tr>

    </>
  )
}

