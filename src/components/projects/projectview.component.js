import {gql, useMutation, useQuery} from '@apollo/client'
import AddProgress from './addProgress.component';
import UpdateProject from './editproject.component';
import decodeToken from '../../controller/token/decodeToken';
import PendingUsers from './pendingUsers.component';
import UserName from './getName.component';



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
            leader
            members
            description
            progress {
                progress
                author
                comment
            }
        }
    }
    `;

    const REGISTERTOPROJECT_MUTATION = gql`
        mutation user($id:String, $user:String){
            registerToProject(id:$id, user:$user)
        }
    `;
    const DELETEPROGRESS_MUTATION = gql`
            mutation dpro($id:String, $progress:String){
                pullProgress(id:$id, progress:$progress)
            }
        `;

    const [pullProgress] = useMutation(DELETEPROGRESS_MUTATION)

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
    const {title, general_objective, specific_objectives, progress, leader, members, description} = data.getProject

    console.log(data)

    const mapMembers = () => members.map((members) => (
        <UserName id={members}/>
    ))

    if(members.includes(token.id) && token.role==='Student'){
        return (
            <div id="body">
                <div id="projectV">
                    <h4>{title}</h4>
                    <p>Bienvenido/a a la página principal del proyecto, desde aquí podrás revisar los avances.</p>
                    <p><b>Descripción del proyecto:</b><br/>{description}</p>
                    <p><b>Objetivo general del proyecto:</b><br/>{general_objective}</p>
                    <p><b>Objetivo específico del proyecto:</b><br/>{specific_objectives}</p>
                    <div>
                    {progress.map(p => {
                            return (
                                <div id="progress" key={p.progress}>
                                <p><UserName id={p.author}/></p>
                                <p>{p.progress}</p>
                                <p id="comment">{p.comment}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <p><b>Líder del proyecto:</b></p><UserName id={leader}/>
                    </div>
                </div>
                <div>
                </div>
                <div>
                    <AddProgress id={id}/>
                </div>
            </div>
            )
    } else if(members.includes(token.id) && (token.role==='Leader' || token.role==='Admin')){
        return (
            <div id="body">
                <div id="projectV">
                    <h4>{title}</h4>
                    <p>Bienvenido/a a la página principal del proyecto, desde aquí podrás revisar los avances.</p>
                    <p><b>Descripción del proyecto:</b><br/>{description}</p>
                    <p><b>Objetivo general del proyecto:</b><br/>{general_objective}</p>
                    <p><b>Objetivo específico del proyecto:</b><br/>{specific_objectives}</p>
                    <div>
                        {progress.map(p => {
                            return (
                                <div id="progress" key={p.progress}>
                                <p><UserName id={p.author}/></p>
                                <p>{p.progress}</p>
                                <p id="comment">{p.comment}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <p><b>Líder del proyecto:</b></p><UserName id={leader}/>
                    </div>
                </div>
                <div>
                    <AddProgress id={id}/>
                </div>
                <div>
                    <h3>Sección de líder</h3>
                </div>
                <div>
                    <UpdateProject id={id}/>
                </div>
                <div>
                    <PendingUsers id={id}/>
                </div>
                <div>
                    <p><b>Miembros del proyecto</b></p> {mapMembers()}
                </div>
            </div>
            )
    }else if(token) {
        return(
            <div id="body">
                <div id="projectV">
                    <h4>{title}</h4>
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