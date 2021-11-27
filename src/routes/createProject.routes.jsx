const createProject = () => {
    return (
        <div>
            <div>
                <form action="POST">
                    <div>
                        <label htmlFor="">Título del proyecto</label>
                    <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Objetivo general</label>
                    <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Objetivo especifico</label>
                    <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Lider</label>
                    <input type="text" />
                    </div>
                    <div>
                        <button type="submit">Crear</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default createProject;