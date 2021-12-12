import {
    useQuery,
    gql
} from "@apollo/client"

const Projects = () => {
    const PROJECTS = gql`
    query{
        projects{
            title
            leader
            general_objective
        }
    }
    `;

    const {loading, error, data} = useQuery(PROJECTS)
    if(loading) return "Cargando..."
    if(error) return "Error al cargar"

    const table = data.projects.map(({title,general_objective,leader}) => (
        
        <div id="project">
            <div id="table">
                <a href="/"><h4>{title}</h4></a>
                <p><b>Objetivo general del proyecto:</b> {general_objective}</p>
                <p><b>Persona responsable del proyecto:</b> {leader}</p>
            </div>
        </div>
    ));
    return <table>{table}</table>
}
export default Projects