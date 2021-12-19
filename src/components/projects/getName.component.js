import {gql, useQuery} from '@apollo/client'


const NAME = gql`
    query get($id:String){
        getName(id:$id)
}
`;

const UserName =  (id) => {
    const {loading, error, data} = useQuery(NAME, {variables:{id:id.id}})
    if(loading) return"Cargando..."
    if(error) console.log(error)
    let leader = data.getName
    return (
        <p>{leader}</p>
    )
}

export default UserName;