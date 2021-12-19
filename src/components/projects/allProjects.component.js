import { useQuery, gql } from '@apollo/client'
import Project from './project.component'
import './projects.css'

const ProjectList = () => {
    const PROJECTS = gql`
    query {
        projects{
            title
            budget
            general_objective
            leader
        }
    }
    `;

    const {loading, error, data} = useQuery(PROJECTS);
    if(loading){return "Cargando, por favor espere"}
    if(error){return "Ha ocurrido un error durante la carga"}

    return (
        <div id="body" >
            <table id="projects-table">
                <thead>
                    <tr>
                        <th id="col-user6">Lista de todos los proyectos registrados</th>
                    </tr>
                    {data.projects.map((project)=> <Project project={project}/>)}
                </thead>
            </table>
        </div>
    )
}

export default ProjectList;