import ProjectList from '../components/projects/allProjects.component';
import Navbar from '../components/nav/navbar';
import decodeToken from '../controller/token/decodeToken';

const ProjectL = () => {
    let token = decodeToken()
    if(token.role === "Admin" || token.role === "Leader" ){
        return (
            <div>
                <Navbar/>
                <ProjectList/>
            </div>
        )
    } else {
        window.location.replace('/login')
    }
    

}

export default ProjectL;