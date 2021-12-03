import React from "react";
import {gql, useMutation} from '@apollo/client';
import Users from "./users.commponents";


const MUTATION_ACTIVATE_USER = gql `
    mutation user($id:Int){
        activateUser(id:$id)
    }
`



const Dashboard_activateUser = () => {
    const [activateUser] = useMutation(MUTATION_ACTIVATE_USER)

    let user = {
        id:0
    } 

    return (
        <div>
            <h1>Activar usuario</h1>

            <div>
                <form onSubmit= {e => {
                    e.preventDefault();
                    activateUser({variables:{
                        id:parseInt(user.id.value)
                    }})
                    window.location.reload();
                }}>

                    <div>
                        <label>Ingrese el id de la persona que desea <b>Activar</b></label>
                        <input type="text" ref={id => user.id = id} placeholder="Identificación" required />
                    </div>

                    <button type="submit">Activar</button>
                </form>
            </div>

            <div>
                <Users/>
            </div>
        </div>
    )
}

export default Dashboard_activateUser;