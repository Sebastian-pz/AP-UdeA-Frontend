import React, {useState} from 'react'
import {gql, useMutation} from '@apollo/client'

import './login.css'

const Login = () =>{

    let email;

    const [pass, setPass] = useState("")

    const AUTHENTICATE = gql`
        mutation authData($email:String, $password:String){
            authenticate(email:$email, password:$password){
                jwt
                status
            }
        }
    `;

    const onChangePassword = (e) => {
        e.preventDefault();
        setPass(e.target.value)
    }

    const [auth] = useMutation(AUTHENTICATE)
    const authenticate = async (e) => {
        e.preventDefault();

        const {data:{authenticate}} = await auth({
            variables:{
                email: email.value,
                password: pass
            }
        })

        if(authenticate.status !== 200){
            if(authenticate.status === 405){
                alert("Aún no se encuentra autorizado")
            } else {
                alert("Datos incorrectos")
            }
        } else {
            localStorage.setItem('authorization', authenticate.jwt)
            window.location.replace('/home')
        }
    }

    return (
        <div id="body">
            <div id="loginb">
                <div id="tt"><h4>Ingresar al sistema</h4></div>
                <form>
                    <label id="label">Ingrese su correo</label><br/>
                    <input autoComplete='off' type="text" id="input1" placeholder='Email' ref={e => email = e}/><br/>
                    <label id="label">Ingrese su contraseña</label><br/>
                    <input autoComplete='off' type="password" id="input1" placeholder='Contraseña' value={pass} onChange={onChangePassword}/><br/>
                    <a id="link_a" href="/createuser">¿Aún no tienes cuenta?</a>
                    <br/>
                    <button className='btn btn-primary' id="btnm"onClick={authenticate}>Iniciar</button>
                </form>
            </div>
        </div>
    )
}

export default Login;