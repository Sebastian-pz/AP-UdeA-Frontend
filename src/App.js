import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css'
import {ApolloProvider} from "@apollo/client";
import client from "./apollo/apollo.client";




import home from "./routes/home.routes"
import projects from "./routes/projects.routes"
import dashboard from "./routes/dashboard.routes";
import logout from "./routes/logout.routes";
import createProject from "./routes/createProject.routes";
import createUser from "./routes/singUp.routes";
import login from "./routes/login.routes";
import activateUser from "./routes/activateUser.routes";
import users from "./routes/users.routes";
import viewProject from "./routes/viewProject.routes";
import MyProjectsRoute from "./routes/myprojects.routes";
import ProjectL from "./routes/allProjects.routes";
import DashboardProjects from "./routes/changeProjectStatus.routes";
import PendingUsersLeader from "./routes/ActivateUserProject.routes";


function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="content w-100">
                    <Switch>
                        <Route path="/home" exact={true} component={home}/>
                        <Route path="/projects" exact={true} component={projects}/>
                        <Route path="/leader/my-projects" exact={true} component={MyProjectsRoute}/>
                        <Route path="/logout" exact={true} component={logout}/>
                        <Route path="/dashboard" exact={true} component={dashboard}/>
                        <Route path="/createproject" exact={true} component={createProject}/>
                        <Route path="/createuser" exact={true} component={createUser}/>
                        <Route path="/login" exact={true} component={login}/>
                        <Route path="/admin/activate" exact={true} component={activateUser}/>
                        <Route path="/admin/projects" exact={true} component={DashboardProjects}/>
                        <Route path="/l/users" exact={true} component={users}/>
                        <Route path="/l/projects" exact={true} component={ProjectL}/>
                        <Route path="/project/:id" component={viewProject}/>
                        
                        <Redirect to="/login"/>
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    )
}
export default App;