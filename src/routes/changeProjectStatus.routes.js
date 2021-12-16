import React from 'react'
import Navbar from '../components/nav/navbar'
import ChangeProjectStatus from '../components/projects/inactiveprojects.component'
import decodeToken from '../controller/token/decodeToken'


const DashboardProjects = () => {
    let token = decodeToken()
    if(token.role === 'Admin'){
        return(
            <div>
                <Navbar/>
                <ChangeProjectStatus/>
            </div>
        )
    } else {
        window.location.replace('/home')
    }
}

export default DashboardProjects;