import React from 'react';
import {gql, useQuery} from '@apollo/client'
import './pending.css'
//import decodeToken from '../../controller/token/decodeToken';


const PendingUsers = (id) => {
    //let token = decodeToken();
    const PROJECT = gql`
    query PROJECT($id:String){
        getProject(id:$id){
            title
            id
            general_objective
            specific_objectives
            progress
            leader
            members
            description
            pending_approval
        }
    }
    `;
    console.log(id.id)
    const {loading, error, data} = useQuery(PROJECT, {variables:{id:(id.id)}})
    if(loading) return "Cargando datos del proyecto."
    if(error) return "Error para cargar los datos del proyecto"
    //const {Pending_approval} = data.getProject
    console.log(data.getProject.pending_approval)

    const table = data.getProject.pending_approval.map((u) => (
        <div id="projectV">
            <div id="ysw">
                <div id="profile-img"></div>
                    <p id="col1a">{u}</p>
                    <p id="col1a"><button className='btn btn-primary' >Aprobar</button></p>
                    <p id="col1a"><button className='btn btn-danger' >Rechazar</button></p>
            </div>
        </div>
    ));
        return <table className='table'>{table}</table>
}

export default PendingUsers;