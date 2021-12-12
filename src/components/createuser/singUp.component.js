import React from 'react';
import { gql, useMutation } from "@apollo/client";

const MUTATION_CREATE_USER = gql `
    mutation newAccount($name:String,$id:String, $email:String, $password:String, $role: String){
        createUser(user:{name:$name, id:$id, email:$email, password:$password, role:$role})
    }
`;

const SingUp = () => {
    const [createUser] = useMutation(MUTATION_CREATE_USER)
    
    let user = {
        name:"",
        id:0,
        email:"",
        password:"",
        role:"",
    }

    return (<div id="body">
        <h1 id="title">Crear usuario</h1>
        <div>
            <form onSubmit = {e => {
                e.preventDefault();
                //Mutación
                createUser({variables:{
                    name: user.name.value,
                    id: user.id.value,
                    email: user.email.value,
                    password: user.password.value,
                    role: user.role.value

                }})
                .then(u => {
                    alert("Usuario creado")
                    window.location.replace('/')
                })
                .catch(err => alert(err))

            }}>

                <div>
                    <label id="label">Ingrese su nombre completo</label><br/>
                    <input id="input" autoComplete="off" ref={name => user.name = name} placeholder="Nombre y apellidos" required/>
                </div>
                <div>
                    <label id="label">Ingrese su documento de identidad</label><br/>
                    <input  id="input" autoComplete="off" ref={id => user.id = id} placeholder="0001" required/>
                </div>
                <div>
                    <label id="label">Ingrese su correo electrónico</label><br/>
                    <input id="input" autoComplete="off" type="email" ref={email => user.email = email} placeholder="Correo" required/>
                </div>
                <div>
                    <label id="label">Ingrese su contraseña</label><br/>
                    <input id="input" autoComplete="off" ref={password => user.password = password} type="password" placeholder="Contraseña" required/>
                </div>
                <div>
                    <label id="label">A qué rol aspira</label><br/>
                    <input id="input" autoComplete="off" list="roles" ref={role => user.role = role} placeholder="Student" required/>
                    <datalist id="roles">
                        <option value="Student"/>
                        <option value="Leader"/>
                    </datalist>
                </div>
                <div><button type="submit" className="btn btn-primary">Crear usuario</button></div>

            </form>
        </div>
    </div>)
}

export default SingUp;