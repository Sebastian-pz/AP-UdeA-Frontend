import { useQuery, gql } from "@apollo/client";

const User = () => {
    const USERS = gql `
    query{
        users{
            id
            name
            role
            accountStatus
        }
    }
`;
    const {loading, error, data} = useQuery(USERS)
    if(loading) return "Loading..."
    if(error) return "Error al cargar"

    const user = data.users;
    console.log(user[0].name)

    return(
        <div>
            {JSON.stringify(user)}
        </div>
    )

}

export default User;