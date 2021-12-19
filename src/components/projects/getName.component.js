import {gql, useQuery} from '@apollo/client'


const NAME = gql`
    query get($id:String){
        getName(id:$id)
}
`;

const UserName =  (id) => {
    const {loading, error, data} = useQuery(NAME, {variables:{id:id.id}})
    if(loading) return"Cargando..."
    if(error) return " Error al cargar"
    let user = data.getName
    return (
        <p>{user}</p>
    )
}

export default UserName;