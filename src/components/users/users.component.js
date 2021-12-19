import { useQuery, gql } from '@apollo/client'
import User from './user.component'
import './users.css'

const UserList = () => {
    const USERS = gql`
    query {
        users{
            id
            name
            email
            role
            accountStatus
        }
    }
    `;

    const {loading, error, data} = useQuery(USERS);
    if(loading){return "Cargando, por favor espere"}
    if(error){return "Ha ocurrido un error durante la carga"}

    return (
        <div id="body" >
            <table id="users-table">
                <thead>
                    <tr>
                        <th id="col-user6">Lista de todos los usuarios registrados</th>
                    </tr>
                    {data.users.map((user)=> <User user={user}/>)}
                </thead>
            </table>
        </div>
    )
}

export default UserList;