import {gql, useQuery} from '@apollo/client'
import AddProgress from './addProgress.component';
import UpdateProject from './editproject.component';


const ProjectView = ({props: {match:{params:{id}}}}) => {
    //console.log(id);
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
        }
    }
    `;

    const {loading, error, data} = useQuery(PROJECT, {variables:{id:id}})
    if(loading) return "Cargando datos del proyecto."
    if(error) return "Error para cargar los datos del proyecto"
    const {title, general_objective, specific_objectives, progress, leader, members, description } = data.getProject

    console.log(progress)

    return (
    <div id="body">
        <div id="projectV">
            <h4>Este es el proyecto {title}</h4>
            <p>Bienvenido/a a la página principal del proyecto, desde aquí podrás revisar los avances.</p>
            <p><b>Descripción del proyecto:</b><br/>{description}</p>
            <p><b>Objetivo general del proyecto:</b><br/>{general_objective}</p>
            <p><b>Objetivo específico del proyecto:</b><br/>{specific_objectives}</p>

            <div>
            {progress.map(x => {
                return (
                    <div id="progress">
                        {x}
                    </div>
                )
            })}
            </div>

            <div>
                <p>Líder del proyecto: {leader}</p>
                <p>Miembros del proyecto {members}</p>
            </div>
        </div>
        <div>
            <AddProgress id={id}/>
        </div>
        <div>
            <UpdateProject id={id}/>
        </div>
    </div>
    )
}
export default ProjectView;