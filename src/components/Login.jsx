import React, { useState, useEffect } from 'react'
import { Menu } from './Menu'
import { ToastEstudiante } from "./ToastEstudiante"

export const Login = () => {

  const [miLogin, setMiLogin] = useState("false");
  const [miUser, setMiUser] = useState("");
  const [miPass, setMiPass] = useState("");

  function iniciarSesion(e){
    e.preventDefault();
    let usuario = document.getElementById("txtusu").value;
    let contrasena = document.getElementById("txtpass").value;
    if (usuario.length === 0 || contrasena.length === 0){
        alert("Complete los datos de manera correcta");
    }
    else{
        if( miUser === "admin" && miPass === "123"){
            setMiLogin("true");
            document.getElementById("form_login").style.display = "none";
        }
        else{
            setMiLogin("false");
            alert("Error de usuario y/o contraseña!!!")
            document.getElementById("txtusu").value = "";
            document.getElementById("txtpass").value = "";
            document.getElementById("txtusu").focus();
        }
    }

  }


  return (
    <div className="container" style={{background: "ligthgray", marginTop:20, padding:20 }}>
        
        {<ToastEstudiante Title={"Bienvenido"} Msg={"Ingrese a nuestro sistema de estudiantes"} duracion={4000}></ToastEstudiante>}
        
        <form id="form_login">
            <div>
                <h1>Login</h1>
                <label>Username:  </label>
                <input type="text" id="txtusu" style={{textAling:"center"}} onBlur={(e) => setMiUser(e.target.value)} className="form-control" required />
            </div>
            <div>
                <label>Password:  </label>
                <input type="password" id="txtpass" style={{textAling:"center"}} onBlur={(e) => setMiPass(e.target.value)} className="form-control" required />
            </div>
            <br/>
            <input type="submit" className="btn btn-primary" value="Ingresar" onClick={iniciarSesion}></input>
        </form>

        { miLogin === "true" && <Menu usuario={miUser} /> }
        
    </div>
  )
}
