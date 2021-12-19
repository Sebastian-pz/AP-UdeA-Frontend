import React from 'react'
import {gql, useMutation, useQuery} from '@apollo/client'
import decodeToken from '../../controller/token/decodeToken';

let token = decodeToken()

const USERINFO = gql`
    query USER($id:String){
        getUser(id:$id){
            name
            email
            id
            role
        }
    }
`;

const UPDATEPROFILE = gql`
    mutation updatedata($id:String, $name:String, $email:String, $password:String){
        updateProfile(id:$id, newUserData:{name:$name, email:$email, password:$password})
    }
`;

const UserDashboard = () => {
    const [UpdateProfile] = useMutation(UPDATEPROFILE)
    let newUserData = {
        name:'',
        email:'',
        password:''
    }

    const {loading, error, data} = useQuery(USERINFO, {variables:{id:token.id}})
    if(loading) return "Cargando..."
    if(error) return "Error durante la carga."

    let {getUser} = data
    console.log(getUser)

    const update = (e) => {
        e.preventDefault();
        UpdateProfile({variables:{
            id:token.id,
            name:newUserData.name.value,
            email:newUserData.email.value,
            password: newUserData.password.value
        }})
            .then(e => {
                alert('Información actualizada')
                window.location.reload()
            }).catch(err => alert('Erro al actualizar los datos'))
    }

    return(
        <div id="body">
            <div id="singupb">
                <h1 id="title">Actualizar información</h1>
                <div>
                    <label id="label">Identificación (inmutable)</label><br/>
                    <input id="input2" disabled="disabled" value={getUser.id}/>
                </div>
                <div>
                    <label id="label">Rol que desempeña (inmutable)</label><br/>
                    <input id="input2" disabled="disabled" value={getUser.role}/>
                </div>
                <div>
                    <label id="label">Ingrese nuevamente su nombre completo</label><br/>
                    <input id="input1" autoComplete="off" ref={name => newUserData.name = name} placeholder={getUser.name} required/>
                </div>
                <div>
                    <label id="label">Ingrese su correo nuevamente</label><br/>
                    <input type="email" id="input1" autoComplete="off" ref={name => newUserData.email = name} placeholder="Correo" required/>
                </div>
                <div>
                    <label id="label">Ingrese su nueva contraseña</label><br/>
                    <input type="password" id="input1" autoComplete="off" ref={name => newUserData.password = name} placeholder="Contraseña" required/>
                </div>
                <div>
                    <button onClick={update} className="btn btn-primary">Enviar</button>
                </div>
            </div>
        </div>
    )

}

export default UserDashboard;