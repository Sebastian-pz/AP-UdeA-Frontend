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

    const table = data.projects.map(({title,general_objective,leader}) => (
        <tr>
            <td>{title}</td>
            <td>{general_objective}</td>
            <td>{leader}</td>
        </tr>
    ));
    return <table>{table}</table>
}
export default Projects