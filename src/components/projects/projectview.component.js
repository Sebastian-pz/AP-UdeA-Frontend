import {gql, useMutation, useQuery} from '@apollo/client'
import AddProgress from './addProgress.component';
import UpdateProject from './editproject.component';
import decodeToken from '../../controller/token/decodeToken';
import PendingUsers from './pendingUsers.component';





const ProjectView = ({props: {match:{params:{id}}}}) => {
    let token = decodeToken()
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

    const REGISTERTOPROJECT_MUTATION = gql`
        mutation user($id:String, $user:String){
            registerToProject(id:$id, user:$user)
        }
    `;

    const [registerToProject] = useMutation(REGISTERTOPROJECT_MUTATION)

    const btn = (e) => {
        e.preventDefault();
        registerToProject({variables:{
            id:(id),
            user:token.id
        }}).then(e => {
            alert("Su inscripción se realizó exitosamente, espere a que lo verifiquen")
            window.location.replace('/projects')
        }).catch( err => alert("Error en la inscripción"))
    }

    const {loading, error, data} = useQuery(PROJECT, {variables:{id:id}})
    if(loading) return "Cargando datos del proyecto."
    if(error) return "Error para cargar los datos del proyecto"
    const {title, general_objective, specific_objectives, progress, leader, members, description } = data.getProject

    //console.log(progress)
    let list = []
    const a = (u) =>{
        list = list + " - " + u
    }

    const mapMembers = () => members.map((members) => (
        a(members)
    ))

    if(members.includes(token.id)){
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
                        <p><b>Líder del proyecto:</b></p>{leader}
                        <p><b>Miembros del proyecto</b></p> {mapMembers() + list}
                    </div>
                </div>
                <div>
                    <AddProgress id={id}/>
                </div>
                <div>
                    <UpdateProject id={id}/>
                </div>
                <div>
                    <PendingUsers id={id}/>
                </div>
            </div>
            )
    } else if(token) {
        return(
            <div id="body">
                <div id="projectV">
                    <h4>Este es el proyecto {title}</h4>
                    <p>Bienvenido/a a la página principal del proyecto, desde aquí podrás revisar los avances.</p>
                    <p><b>Descripción del proyecto:</b><br/>{description}</p>
                    <p><b>Objetivo general del proyecto:</b><br/>{general_objective}</p>
                    <p><b>Objetivo específico del proyecto:</b><br/>{specific_objectives}</p>
                    <button onClick={btn} className='btn btn-primary'>Inscribirse en el proyecto</button>
                </div>
            </div>
        )
    } else {
        window.location.replace('/login')
    }

    
}
export default ProjectView;