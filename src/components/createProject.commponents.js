import { gql, useMutation } from "@apollo/client";
import React from "react";




const MUTATION_PROJECT = gql`
    mutation newProject($projectTitle:String,$go:String,$so:String,$budget:Int,$leader:String){
        createProject(project:{title:$projectTitle, general_objective: $go, specific_objectives: $so,budget: $budget,  leader:$leader})
    }
`;

const CreateProject = () => {
    const [createProject] = useMutation(MUTATION_PROJECT)
    /*
    if (loading) return 'Creando...';
    if(error) return `Error en la creación  ${error.message}`;
    */

    let project = {
        title:"",
        general_objective:"",
        specific_objectives:"",
        budget:0,
        leader:"",
    }
    return (<div>
        <h1>Crear projecto</h1>
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                //Aquí va la mutación 
                createProject({variables:{
                    projectTitle: project.title.value,
                    go: project.general_objective.value,
                    so: project.specific_objectives.value,
                    budget: parseInt(project.budget.value),
                    leader: project.leader.value                                                           
                }})

            }}>
                <div>
                    <label>Título del proyecto</label>
                    <input ref={title => project.title = title} placeholder="Título" required/>
                </div>
                <div>
                    <label>Objetivo general del proyecto</label>
                    <input ref={general_objective => project.general_objective = general_objective} placeholder="Objetivos generales" required/>
                </div>
                <div>
                    <label>Objetivos especificos del proyecto</label>
                    <input ref={specific_objectives => project.specific_objectives = specific_objectives} placeholder="Objetivos específicos" required/>
                </div>
                <div>
                    <label>Presupuesto</label>
                    <input  ref={budget => project.budget = budget} placeholder="Presupuesto" required/>
                </div>
                <div>
                    <label>Lider acargo del proyecto</label>
                    <input ref={leader => project.leader = leader} placeholder="Líder" required/>
                </div>
                <div><button type="submit">Crear proyecto</button></div>
            </form>
        </div>
    </div>)
}

export default CreateProject;