import React from 'react'
import Table from "react-bootstrap/Table"
import { FilaEstudiante } from "./FilaEstudiante"

function dataTable(){
  return <FilaEstudiante></FilaEstudiante>
}

export const ListarEstudiantes = () => {
  return (
    <div className="table-wrapper">
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
    </div>
  )
}
