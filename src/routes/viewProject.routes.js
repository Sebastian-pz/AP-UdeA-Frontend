import ProjectView from "../components/projects/projectview.component";
import React from "react";
import Navbar from '../components/nav/navbar';

const viewProject = (props) => {
    return (
        <div>
            <Navbar/>
            <ProjectView props={props}/>
        </div>
    )
}

export default viewProject;