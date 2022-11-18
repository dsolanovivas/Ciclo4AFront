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
    props.handle();
  }

  return (
    <>
    <tr>
        <td>Juan Gomez</td>
        <td>yosoyeljuan@gmail.com</td>
        <td>987654321</td>
        <td>
            <Link className="edit-link" onClick={editarEstudiante} >Editar</Link>
            &nbsp;
            <Button onClick={borrarEstudiante} size="sm" variant="danger">Borrar</Button>
        </td>
    </tr>

    </>
  )
}

