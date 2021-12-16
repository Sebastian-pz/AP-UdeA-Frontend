import React from 'react';
import {gql, useMutation} from '@apollo/client'

    const UPDATEPROJECT_MUTATION = gql`
    mutation newProjectData($id:String, $title:String, $general_objective:String, $specific_objectives:String, $description:String){
        updateProject(id:$id, newProjectData:{ title:$title, general_objective:$general_objective, specific_objectives:$specific_objectives, description:$description})
    }
    `;


const UpdateProject = (id) => {
    const [updateProject] = useMutation(UPDATEPROJECT_MUTATION)

    let ti, og, os, des = ''

    const update= (e) => {
        e.preventDefault();
        console.log(id.id)
        console.log(des.value)
        updateProject({variables:{
            id: id.id,
            title:ti.value,
            general_objective:og.value,
            specific_objectives:os.value,
            description:des.value
        }}).then(e => {
            alert('Cambios realizados')
            window.location.reload()
        }).catch(err => alert('No se realizaron los cambios'))
    }
    return (
        <div>
            <div>
                <h3>Editar el proyecto</h3>
                <p>Ingrese nuevamente los datos</p>
            </div>
            <div>
                <label>Ingrese el nuevo título del proyecto</label>
                <input ref={title => ti = title} required autoComplete='off' type='text'></input>
                <label>Ingrese la descripción</label>
                <textarea ref={description => des = description} required autoComplete='off'/>
                <label>Ingrese el objetivo general</label>
                <textarea ref={obge => og = obge } required autoComplete='off'/>
                <label>Ingrese los objetivos específico</label>
                <textarea ref={obsp => os = obsp} required autoComplete='off'/>
                <button onClick={update}>UPDATE</button>
            </div>
        </div>
    )
}

export default UpdateProject;