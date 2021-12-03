import React from 'react';
import { gql, useMutation } from "@apollo/client";

const MUTATION_CREATE_USER = gql `
    mutation newAccount($name:String,$id:Int, $email:String, $password:String, $role: String){
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

    return (<div>
        <h1>Crear usuario</h1>
        <div>
            <form onSubmit = {e => {
                e.preventDefault();
                //Mutación
                createUser({variables:{
                    name: user.name.value,
                    id: parseInt(user.id.value),
                    email: user.email.value,
                    password: user.password.value,
                    role: user.role.value

                }})

            }}>

                <div>
                    <label>Ingrese su nombre completo</label>
                    <input ref={name => user.name = name} placeholder="Nombre y apellidos" required/>
                </div>
                <div>
                    <label>Ingrese su documento de identidad</label>
                    <input ref={id => user.id = id} placeholder="0001" required/>
                </div>
                <div>
                    <label>Ingrese su correo electrónico</label>
                    <input type="email" ref={email => user.email = email} placeholder="Correo" required/>
                </div>
                <div>
                    <label>Ingrese su contraseña</label>
                    <input ref={password => user.password = password} type="password" placeholder="Contraseña" required/>
                </div>
                <div>
                    <label>A qué rol aspira</label>
                    <input list="roles" ref={role => user.role = role} placeholder="Student" required/>
                    <datalist id="roles">
                        <option value="Leader"/>
                        <option value="Student"/>                        
                    </datalist>
                </div>
                <div><button type="submit">Crear usuario</button></div>

            </form>
        </div>
    </div>)
}

export default SingUp;