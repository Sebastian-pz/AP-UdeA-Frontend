import {
    useQuery,
    gql
} from "@apollo/client"
import { Link } from "react-router-dom";
import decodeToken from "../../controller/token/decodeToken";

let token = decodeToken()

const MyProjects = () => {
    const PROJECTS = gql`
    query data($leader:String){
        myProjects(leader:$leader){
            title
            leader
            general_objective
            id
            isActive
        }
    }
    `;

    const {loading, error, data} = useQuery(PROJECTS, {variables:{leader:token.id}})
    if(loading) return "Cargando..."
    if(error) return "Error al cargar"
    
    const ProjectIsActive = (isA) => {
        if(isA === true){
            return (
                <p>Activo</p>
            )
        } else if (isA === false){
            return (
                <p>Inactivo</p>
            )
        }
    }

    const table = data.myProjects.map(({title,general_objective,leader,id, isActive}) => (

        <div id="project" key={id}>
            <div id="tablita">
                <Link to={`/project/${id}`}><h4>{title}</h4></Link>
                <p><b>Objetivo general del proyecto:</b> {general_objective}</p>
                <p><b>Persona responsable del proyecto:</b> {leader}</p>
                <p><b>Estado del proyecto: </b>{ProjectIsActive(isActive)}</p>
            </div>
        </div>
    ));
    return <table>{table}</table>
}
export default MyProjects;