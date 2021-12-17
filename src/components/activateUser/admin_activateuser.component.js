import React from "react";
import {gql, useMutation} from '@apollo/client';
import InactiveUsers from "../users/inactiveusers.component";



const MUTATION_ACTIVATE_USER = gql `
    mutation user($id:String){
        activateUser(id:$id)
    }
`



const AdminActivateUser = () => {
    const [activateUser] = useMutation(MUTATION_ACTIVATE_USER)

    let user = {
        id:0
    }

    return (
        <div id="body">
            <h1>Activar usuario</h1>

            <div>
                <form onSubmit= {e => {
                    e.preventDefault();
                    activateUser({variables:{
                        id:user.id.value
                    }})
                        .then(response => {
                            console.log(response.data.activateUser)
                            if(response.data.activateUser === "Usuario activado"){
                                window.location.reload()
                            }
                        })
                }}>

                    <div>
                        <label id="label">Ingrese el id de la persona que desea <b>Activar </b></label>
                        <br/>
                        <input id="input" maxLength="10" autoComplete="off" type="text" ref={id => user.id = id} placeholder="Identificación" required />
                    </div>

                    <button type="submit" className="btn btn-success">Activar</button>
                </form>
            </div>

            <h2 id="title">Lista de usuarios inactivos:</h2>

            <div>
                <InactiveUsers/>
            </div>
        </div>
    )
}

export default AdminActivateUser;