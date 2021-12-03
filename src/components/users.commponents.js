import { useQuery, gql } from "@apollo/client";

const Users = () => {
    const USERS = gql `
    query{
        users{
            id
            name
            accountStatus
        }
    }
`;
    const {loading, error, data} = useQuery(USERS)
    if(loading) return "Loading..."
    const table = data.users.map(({id,name,accountStatus}) => (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{accountStatus}</td>
        </tr>
    ));
        return <table>{table}</table>
}

export default Users;