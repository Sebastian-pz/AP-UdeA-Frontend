import {gql, useMutation} from '@apollo/client'


const ADDPROGRESS_MUTATION = gql`
    mutation progress($id:String, $progress:String){
        addprogress(id:$id , progress:$progress)
    }
`;
const AddProgress = (id) => {

    const [addprogress] = useMutation(ADDPROGRESS_MUTATION)
    let progress = "";

    const add = (e) => {
        e.preventDefault();
        //console.log(progress.value)
        //console.log(id.id)
        addprogress({variables:{
            id:id.id,
            progress:progress.value
        }}).then(e => {
            alert("Progreso añadido con éxito")
            window.location.reload()
        }).catch( err => alert("Error en el proceso"))
    }

    return (

        <div id="table-progress">
            <h4>Añadir progreso</h4>
            <div>
                <textarea autoComplete='off' placeholder='¿Cuál es su progreso?' ref={p => progress = p} type="text" id="input-progress"/>
                <br/>
                <button onClick={add} className='btn btn-primary'>Enviar</button>
            </div>
        </div>

    )
}

export default AddProgress;