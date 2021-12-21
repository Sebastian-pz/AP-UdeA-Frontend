import {gql, useMutation} from '@apollo/client'
import decodeToken from '../../controller/token/decodeToken';

const token = decodeToken()
let user = token.id

const CREATEPROGRESS_MUTATION = gql`
    mutation newPro($id:String, $progress:String, $author:String, $comment:String){
        addprogress(id:$id, newProgress:{progress:$progress,author:$author,comment:$comment})
    }
`

const AddProgress = (id) => {

    const [addprogress] = useMutation(CREATEPROGRESS_MUTATION)

    let progress = {
        progress:"",
        author:(user),
        comment:"Aun no se ha realizado ningún comentario"
    }


    const add = (e) => {
        e.preventDefault();
        addprogress({variables:{
            id:id.id,progress: progress.progress.value,author: progress.author,comment: progress.comment
        }}).then(u => {
            alert("Progreso añadido")
            window.location.reload()
        })
            .catch(err => alert("Sucedió un error en la creación " + err))
    }

    return (

        <div id="table-progress">
            <h4>Añadir progreso</h4>
            <div>
                <textarea autoComplete='off' placeholder='¿Cuál es su progreso?' ref={p => progress.progress = p} type="text" id="input-progress"/>
                <br/>
                <button onClick={add} className='btn btn-primary'>Enviar</button>
            </div>
        </div>

    )
}

export default AddProgress;