import React from "react";
import Navbar from '../components/nav/navbar';
import MyProjects from "../components/projects/myprojects.component";

const MyProjectsRoute = () => {
    return(
        <div>
            <Navbar/>
            <MyProjects/>
        </div>
    )
}

export default MyProjectsRoute;