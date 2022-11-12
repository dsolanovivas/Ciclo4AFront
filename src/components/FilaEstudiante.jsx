import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

export const FilaEstudiante = (props) => {
  return (
    <tr>
        <td>Juan Gomez</td>
        <td>yosoyeljuan@gmail.com</td>
        <td>987654321</td>
        <td>
            <Link>Editar</Link>
            <Button size="sm" variant="danger">Borrar</Button>
        </td>
    </tr>
  )
}

