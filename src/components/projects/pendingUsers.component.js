import React from 'react';
import {gql, useQuery, useMutation} from '@apollo/client'
import './pending.css'
//import decodeToken from '../../controller/token/decodeToken';


const PendingUsers = (id) => {
    //let token = decodeToken();
    const PROJECT = gql`
    query PROJECT($id:String){
        getProject(id:$id){
            id
            leader
            members
            pending_approval
        }
    }
    `;

    const MUTATION_ACCEPTUSER = gql`
        mutation project($id:String, $user:String){
            acceptUser(id:$id, user:$user)
        }
    `;

    const MUTATION_DECLINEUSER = gql`
        mutation project($id:String, $user:String){
            declineUser(id:$id, user:$user)
        }
    `;

    const [acceptUser] = useMutation(MUTATION_ACCEPTUSER)
    const [declineUser] = useMutation(MUTATION_DECLINEUSER)

    const {loading, error, data} = useQuery(PROJECT, {variables:{id:(id.id)}})
    if(loading) return "Cargando datos del proyecto."
    if(error) return "Error en la carga de datos:"
    //const {Pending_approval} = data.getProject
    //console.log(data.getProject.pending_approval)

    const table = data.getProject.pending_approval.map((user) => (
        <div id="projectV">
            <div id="ysw">
                <div id="profile-img"></div>
                    <p id="col1a">{user}</p>
                    <p id="col1a"><button onClick={e => {
                        e.preventDefault();
                        let pid = id.id
                        acceptUser({variables:{id:pid, user}})
                        window.location.reload()
                    }} className='btn btn-primary' >Aprobar</button></p>
                    <p id="col1a"><button onClick={e => {
                        e.preventDefault();
                        let pid = id.id
                        declineUser({variables:{id:pid, user}})
                        window.location.reload()
                    }} className='btn btn-danger' >Rechazar</button></p>
            </div>
        </div>
    ));
        return <table className='table'>{table}</table>
}

export default PendingUsers;