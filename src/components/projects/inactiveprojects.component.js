import {gql, useMutation, useQuery} from '@apollo/client'

const ChangeProjectStatus = () => {

    const ACTIVATEPROJECT_MUTATION = gql`
        mutation project($id:String){
            activateProject(id:$id)
        }
    `;

    const STOPPROJECT_MUTATION = gql`
        mutation project($id:String){
            stopProject(id:$id)
        }
    `;

    const [activateProject] = useMutation(ACTIVATEPROJECT_MUTATION);
    const [stopProject] = useMutation(STOPPROJECT_MUTATION);

    const PROJECTS = gql`
        query{
            projects{
                id
                title
                general_objective
                leader
                budget
            }
        }
    `;
    
    const {loading, error, data} = useQuery(PROJECTS)
    if(loading) return "Cargando..."
    if(error) return "Error en la carga..."

    const table = data.projects.map(({id, title, general_objective, leader, budget}) => (
        (<div id="userbody" >
            <div id="user">
                <table className="table" id="tablita">
                    <tr id="row">
                        <td id="col1">{title}</td>
                        <td id="col2">{general_objective}</td>
                        <td id="col3">{leader}</td>
                        <td id="col4">{budget}</td>
                        <button id="buttonActivate" className="btn btn-success" onClick={ e => {
                            e.preventDefault();
                            activateProject({variables:{id}})
                                .then(response => {
                                    alert(response.data.activateProject)
                                    if(response.data.activateProject === "Usuario activado"){
                                        window.location.reload()
                                    }
                                })
                        }}>Habilitar</button>
                        <button id="buttonActivate" className="btn btn-danger" onClick={ e => {
                            e.preventDefault();
                            stopProject({variables:{id}})
                                .then(response => {
                                    alert(response.data.stopProject)
                                    if(response.data.stopProject === "Usuario eliminado"){
                                        window.location.reload()
                                    }
                                })
                        }}>Deshabilitar</button>
                    </tr>
                </table>
            </div>
        </div>)
    ));
    return <table className='table'>{table}</table>
}

export default ChangeProjectStatus;