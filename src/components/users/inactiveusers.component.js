import { useQuery, gql, useMutation } from "@apollo/client";



const InactiveUsers = () => {

    const MUTATION_ACTIVATE_USER = gql `
        mutation user($id:String){
            activateUser(id:$id)
        }
    `

    const MUTATION_DELETEUSER = gql `
        mutation user($id:String){
            deleteUser(id:$id)
        }
    `
    const [deleteUser] = useMutation(MUTATION_DELETEUSER)
    const [activateUser] = useMutation(MUTATION_ACTIVATE_USER)
    const INACTIVEUSERS = gql `
    query{
        getInactiveUser{
            id
            name
            role
            accountStatus
        }
    }
`;

    const {loading, error, data} = useQuery(INACTIVEUSERS)
    if(loading) return "Loading..."
    if(error) return "Error al cargar"
    const table = data.getInactiveUser.map(({id,name,role,accountStatus}) => (
        (<div id="userbody" >
            <div id="user">
                <table className="table" id="tablita">
                    <tr id="row">
                        <td id="col1">{id}</td>
                        <td id="col2">{name}</td>
                        <td id="col3">{role}</td>
                        <td id="col4">{accountStatus}</td>
                        <button id="buttonActivate" className="btn btn-success" onClick={ e => {
                            e.preventDefault();
                            activateUser({variables:{id}})
                            window.location.reload()
                        }}>Activar</button>
                        <button id="buttonActivate" className="btn btn-danger" onClick={ e => {
                            e.preventDefault();
                            deleteUser({variables:{id}})
                            window.location.reload()
                        }}>Eliminar</button>
                    </tr>
                </table>
            </div>
        </div>)
    ));
        return <table className="table">{table}</table>
}

export default InactiveUsers;