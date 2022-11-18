import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form"


export const EditarEstudiante = (props) => {

  const [myName, setMyName] = useState("");
  const [myEmail, setMyEmail] = useState("");
  const [myId, setMyId] = useState("");

  function editarRegistro(e){
    e.preventDefault();
    alert("Se edito")
    //Aqui Se envian los datos al servidor (API REST)
    props.handleC();
  }

  return (
    <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={true}>
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Editar Estudiante
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="form-wrapper">
                <Form id="form_editarEstudiante">
                    <Form.Group controlId="Name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" onBlur={(e) => setMyName(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Email">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" onBlur={(e) => setMyEmail(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId="Id">
                    <Form.Label>Cedula</Form.Label>
                    <Form.Control type="text" onBlur={(e) => setMyId(e.target.value)}></Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" size="lg" block="block" onClick={editarRegistro} className="mt-4"> Close</Button>
            <Button size="lg" block="block" type="submit" onClick={editarRegistro} className="mt-4">Editar</Button>
        </Modal.Footer>
        
        
    </Modal>
  )
}
