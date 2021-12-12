import React from 'react';

const Login = () => {

    return (
        <div id="bodylogin">
            <div id="logback">
                <form id="formlogin">
                    <h2 id="logintitle">Login</h2>
                    <div>
                        <label id="label">Ingrese su correo</label>
                        <input id="inputlogin" type="email" required/>
                    </div>
                    <div>
                        <label id="label">Ingrese su contraseña</label>
                        <input id="inputlogin" type="password" required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Ingresar</button>
                </form>
            </div>
        </div>
    )
}
export default Login;