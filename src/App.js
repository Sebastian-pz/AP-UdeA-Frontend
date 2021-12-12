import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import './App.css'



import home from "./routes/home.routes"
import projects from "./routes/projects.routes"
import profile from "./routes/profile.routes"
import dashboard from "./routes/dashboard.routes";
import logout from "./routes/logout.routes";
import createProject from "./routes/createProject.routes";
import createUser from "./routes/singUp.routes";
import login from "./routes/login.routes";
import activateUser from "./routes/activateUser.routes";
import User from "./routes/user.routes";



function App() {
    return (
        <Router>
            <div className="content w-100">
                <Switch>
                    <Route path="/" exact={true} component={home}/>
                    <Route path="/projects" exact={true} component={projects}/>
                    <Route path="/profile" exact={true} component={profile}/>
                    <Route path="/logout" exact={true} component={logout}/>
                    <Route path="/dashboard" exact={true} component={dashboard}/>
                    <Route path="/createproject" exact={true} component={createProject}/>
                    <Route path="/createuser" exact={true} component={createUser}/>
                    <Route path="/login" exact={true} component={login}/>
                    <Route path="/admin/activate" exact={true} component={activateUser}/>
                    <Route path="/user" exact={true} component={User}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
            
        </Router>
    )
}
export default App;