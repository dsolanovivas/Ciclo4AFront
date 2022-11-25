import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { EditarEstudiante } from "./EditarEstudiante"

export const FilaEstudiante = (props) => {

  function borrarEstudiante(){
    alert("Estudiante para eliminar");
    // Aqui se debe implementar el llamado a eliminar estudiante en API REST
  }

  function editarEstudiante(e){
    e.preventDefault();
    props.handleOpenModal();
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

