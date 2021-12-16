import {
    useQuery,
    gql
} from "@apollo/client"
import { Link } from "react-router-dom";

const Projects = () => {
    const PROJECTS = gql`
    query{
        getActiveProjects{
            title
            leader
            general_objective
            id
        }
    }
    `;

    const {loading, error, data} = useQuery(PROJECTS)
    if(loading) return "Cargando..."
    if(error) return "Error al cargar"

    const table = data.getActiveProjects.map(({title,general_objective,leader,id}) => (

        <div id="project" key={id}>
            <div id="tablita">
                <Link to={`/project/${id}`}><h4>{title}</h4></Link>
                <p><b>Objetivo general del proyecto:</b> {general_objective}</p>
                <p><b>Persona responsable del proyecto:</b> {leader}</p>
            </div>
        </div>
    ));
    return <table>{table}</table>
}
export default Projects