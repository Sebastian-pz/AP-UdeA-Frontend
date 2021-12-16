const Project = ({project}) => {
    return (
        <div>
            <tr>
                <td id="col-project">{project.leader}</td>
                <td id="col-project2">{project.title}</td>
                <td id="col-project3">{project.general_objective}</td>
                <td id="col-project4">$ {project.budget}</td>
            </tr>
        </div>
    )
}

export default Project;